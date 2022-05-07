import react, { useState, useEffect } from "react";
import styles from "./Chat.module.css"
import useToken from "../../hook/useToken";
import { GetRequestAuth } from "../../service/FetchService"
import Loader from "../common/Loader";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

var socket = null;

export default function Chat() {
    const [data, setData] = useState({ isConnected: false, isLoaded: false });
    const [messages, setMessages] = useState({messages: []});
    const [id, setId] = useState();
    const [ticket, setTicket] = useState("");
    const [message, setMessage] = useState();
    const { token, setToken } = useToken();
    useEffect(() => {
        if (ticket === "" && data.isConnected === false) {
            GetRequestAuth("/chat/ticket", (res) => {
                setTicket(res.ticket);
            },
                (err) => {
                    console.log(err);
                },
                token);
            GetRequestAuth("/profile", (res) => {
                setId(res.id);
            },
                (err) => {
                    console.log(err);
                },
                token);
        }
        if (ticket !== "" && data.isConnected === false) {
            setUpSocket(data, setData, messages, setMessages, ticket);
        }
    }, [data, token, id, messages, ticket, message]);

    if (data.isConnected === false) {
        return (<Loader />);
    }

    const send = (event) => {
        var mess = messages.messages;
        var format = { "text": event.target.value, "sender": id };
        event.target.value = "";
        var m = JSON.stringify(format);
        mess.push(format);
        socket.send(m);
        setMessages({messages: mess});
    }

    const onChange = (value) => { setMessage(value) }
    socket.onopen = (e) => {
        console.log('OPENED')
        socket.send(JSON.stringify({ "ticket": ticket }));
    };

    socket.onmessage = (event) => {
        var mess = messages.messages;
        const d = event.data;
        const socketData = JSON.parse(d);
        if(socketData.type === 'history'){
            setMessages({messages: socketData.messages});
        }else{
            mess.push(socketData);
            setMessages({messages: mess});
        }


    };

    socket.onclose = (event) => {
        console.log("disconnected!")
        // socket.close();
        // setData({ ...data, isConnected: false });
        // data.socket = null;
    };
    return (
        <div>
            <div className={styles.out}>
                {formatMessages(messages, id)}
            </div>
            <div className={styles.send}>
                <input type="text" onChange={e => onChange(e)} />
                <button onClick={e => send(message)}>send</button>
            </div>
        </div>

    );
}

function formatMessages(messages, id) {
    return messages.messages.map(a => {
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

function setUpSocket(data, setData, messages, setMessages, ticket) {
    if (socket === null && data.ticket !== "" && data.isConnected === false) {
        socket = new WebSocket("ws://localhost:8080/chat/rooms/1100");
        setData({ ...data, isLoaded: true, isConnected: true });
    }
}