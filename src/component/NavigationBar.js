import React, { useState } from "react";
import styles from "./NavigatorBar.module.css"

const links = ["Home", "Cats", "New cat", "Login"];

export default function NavigationBar(props) {
    console.log(props.path);
    const [elems, setElems] = useState({ "active": links[0] });
    const activeElem = elems.active;

    const renderLinks = links.map((link) => {
        if (link === activeElem) {
            return <a key={link} className={styles.active}>{link}</a>
        } else {
            return <a key={link} className={styles.a} onClick={() => setElems({"active":link})}>{link}</a>
        }
    })
    return (
        <div className={styles.topnav}>
            {renderLinks}
        </div>
    );
}