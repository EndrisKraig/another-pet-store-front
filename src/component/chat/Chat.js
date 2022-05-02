import react, { useState } from "react";
import styles from "./Chat.module.css"

let socket;

export default function Chat() {
    const [data, setData] = useState({ messages: [], isConnected: false });

    if (data.isConnected === false) {
        socket = new WebSocket("ws://localhost:8080/chat");
        setData({ ...data, isConnected: true });
    }

    socket.onmessage = function (event) {
        var mess = data.messages;
        const d = event.data;
        const socketData = JSON.parse(d);
        if (socketData.id) {
            console.log(socketData.id);
            setData({ ...data, id: socketData.id });
        } else {
            mess.push(socketData);
            setData({ ...data, messages: mess });
        }
    };

    const send = (message) => {
        var m = JSON.stringify({ "text": message, "sender": data.id });
        socket.send(m);
    }

    socket.onclose = function (event) {
        console.log("disconnected!")
        socket.close();
        setData({ ...data, isConnected: false });
    };
    return (
        <div>
            <div className={styles.out}>
                {formatMessages(data.messages, data.id)}
            </div>
            <div className={styles.send}>
                <input type="text" onChange={e => setData({ ...data, message: e.target.value })} />
                <button onClick={e => send(data.message)}>send</button>
            </div>
        </div>

    );
}

function formatMessages(messages, id) {
    return messages.map(a => {
        console.log(id);
        var style;
        if (a.sender === id) {
            style = styles.message_from;
        } else {
            style = styles.message_to;
        }
        return (
            <div className={style}>
                <div className={styles.text}>{a.text}</div>
            </div>
        );
    }
    );
}