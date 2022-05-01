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
        setData({ ...data, isConnected: false });
    };
    return (<div className={styles.out}><div>
        <input type="text" onChange={e => setData({ ...data, message: e.target.value })} />
        <button onClick={e => send(data.message)}>send</button>
    </div>
        <div>{formatMessages(data.messages)}</div></div>)
}

function formatMessages(messages) {
    return messages.map(a => {
        return (<div className={styles.message_me}>{a.text}</div>)
    }
    );
}