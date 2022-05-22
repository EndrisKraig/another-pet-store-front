import react, { useState, useEffect } from "react";
import GetRequest from "../../service/FetchService";
import Loader from "../common/Loader";
import styles from "./Stickers.module.css"

const stickers = ["https://i.pinimg.com/originals/ec/58/6a/ec586ac26f29bf6d186f0a738acdb056.jpg",
    "https://i.pinimg.com/originals/08/8d/6f/088d6f52b161be436a160c1392204ea0.png",
    "https://i.pinimg.com/originals/a9/45/c7/a945c76e7335188d7ddd176961a1f6ed.png",
    "https://i.pinimg.com/originals/fa/a5/9b/faa59be489d393a6275be4b723cbbd79.jpg"];

export default function Stickers(props) {
    const [kits, setKits] = useState([]);
    const [network, setNetwork] = useState({ isDownloaded: false, error: null })
    useEffect(() => {
        if (network.isDownloaded === false) {
            GetRequest("/kits",
                (resp) => {
                    setNetwork({ isDownloaded: true, error: null });
                    console.log(resp);
                    const j = resp.kits;
                    const arr = Array.from(j.basic);
                    console.log(arr);
                    setKits(arr);
                },
                (resp) => {
                    setNetwork({ isDownloaded: true, error: true });
                });
        }
    }
    ); 

    if (network.isDownloaded === false) {
        return (<Loader />);
    }
    console.log(kits);
    const st = kits.map(s => <div id={s.id} className={styles.in}><img src={s.uri} alt={s.uri} onClick={() => props.send(s.uri)} /></div>);
    return (
        <div className={styles.menu}>
            {st}
        </div>
    );
}