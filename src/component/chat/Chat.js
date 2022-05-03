import react, { useState, useEffect } from "react";
import styles from "./Chat.module.css"
import useToken from "../../hook/useToken";
import { GetRequestAuth } from "../../service/FetchService"
import Loader from "../common/Loader";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

var socket = null;

export default function Chat() {
    const [data, setData] = useState({ messages: [], isConnected: false, ticket: "", isLoaded: false, id: null });
    const { token, setToken } = useToken();
    console.log(data);
    useEffect(() => {
        if (data.ticket === "" && data.isConnected === false) {
            GetRequestAuth("/chat/ticket", (res) => {
                const ticket = res.ticket;
                setData({ ...data, "ticket": ticket, aaa: ticket });

            },
                (err) => {
                    console.log(err);
                },
                token);
            GetRequestAuth("/profile", (res) => {
                setData({...data, id: res.id})
            },
            (err) => {
                console.log(err);
            },
            token);
        }
        if(data.ticket !== "" && data.isConnected === false){
            setUpSocket(data, setData);
        }
    }, [data, token]);

    // if (data.isConnected === false) {
    //     return (<Loader />);
    // }

    const send = (message) => {
        var m = JSON.stringify({ "text": message });
        console.log(socket);
        socket.send(m);
        setData({...data, isConnected: true});
    }

    const onChange = (value) => {setData({...data, message: value})}

    return (
        <div>
            <div className={styles.out}>
                {formatMessages(data.messages, data.id)}
            </div>
            <div className={styles.send}>
                <input type="text" onChange={e => onChange(e.target.value)} />
                <button onClick={e => send(data.message)}>send</button>
            </div>
        </div>

    );
}

function formatMessages(messages, id) {
    return messages.map(a => {
        var style;
        if (a.sender === id) {
            style = styles.message_from;
        } else {
            style = styles.message_to;
        }
        return (
            <div id={a.text} className={style}>
                <div className={styles.text}>{a.text}</div>
            </div>
        );
    }
    );
}

async  function setUpSocket(data, setData) {
    if (socket === null && data.ticket !== "" && data.isConnected === false) {
        socket = new WebSocket("ws://localhost:8080/chat/rooms/1100");

        // socket.onopen = (e) => {
        //     console.log('OPENED')
        //     socket.send(JSON.stringify({ "ticket": data.ticket }));
        // };

        socket.onmessage = (event) => {
            var mess = data.messages;
            const d = event.data;
            const socketData = JSON.parse(d);
            mess.push(socketData);
            setData({...data, messages: mess });

        };

        socket.onclose = (event) => {
            console.log("disconnected!")
            // socket.close();
            // setData({ ...data, isConnected: false });
            // data.socket = null;
        };
        setData({ ...data, isLoaded: true, isConnected: true });
        await new Promise(r => setTimeout(r, 2000));
        socket.send(JSON.stringify({ "ticket": data.ticket }));
    }
}