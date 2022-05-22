import react, { useState, useEffect } from "react";
import styles from "./Chat.module.css"
import useToken from "../../hook/useToken";
import { GetRequestAuth } from "../../service/FetchService"
import Loader from "../common/Loader";
import Stickers from "./Stickers";

var socket = null;

export default function Chat() {
    const [data, setData] = useState({ isConnected: false, isLoaded: false });
    const [messages, setMessages] = useState({ messages: [] });
    const [id, setId] = useState();
    const [ticket, setTicket] = useState("");
    const [message, setMessage] = useState();
    const { token, setToken } = useToken();

    const bottom = react.createRef();

    const scrollToBottom = () => {
        bottom.current.scrollIntoView({ behavior: 'smooth' })
    }

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
        if (data.isConnected) {
            scrollToBottom();
        }
    }, [data, token, id, messages, ticket, message]);

    if (data.isConnected === false) {
        return (<Loader />);
    }



    const send = (text, format) => {
        var mess = messages.messages;
        var jsonMessage = { "text": text, "sender": id, "format": format };
        var m = JSON.stringify(jsonMessage);
        mess.push(jsonMessage);
        socket.send(m);
        setMessages({ messages: mess });
    }

    const sendText = (event) => {
        send(event.target.value, 'text');
        event.target.value = "";
    };

    const sendSticker = (url) => {
        send(url, 'sticker')
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
        if (socketData.type === 'history') {
            setMessages({ messages: socketData.messages });
        } else {
            mess.push(socketData);
            setMessages({ messages: mess });
        }
    };

    socket.onclose = (event) => {
        setData({ ...data, isConnected: false });
        data.socket = null;
    };

    return (
        <div className={styles.wrapper}>
            <div id="chatBox" className={styles.out}>
                {formatMessages(messages, id)}
                <div ref={bottom} />
            </div>
            <div className={styles.send}>
                <input type="text" onChange={e => onChange(e)} />
                <button onClick={e => sendText(message)}>send</button>
            </div>
            <Stickers send={sendSticker} />
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
        if (a.format === 'text') {
            return (
                <div id={a.text} className={style}>
                    <div id={a.text} className={styles.text}>{a.text}</div>
                </div>
            );
        } else {
            return (
                <div id={a.text} className={style}>
                    <img id={a.text} src={a.text} alt={a.text} className={styles.sticker}/>
                </div>
            );
        }
    }
    );
}

function setUpSocket(data, setData) {
    if (socket === null && data.ticket !== "" && data.isConnected === false) {
        socket = new WebSocket("ws://localhost:8080/chat/rooms/1100");
        setData({ ...data, isLoaded: true, isConnected: true });
    }
}