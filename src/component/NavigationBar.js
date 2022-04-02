import React, { useEffect, useState } from "react";
import styles from "./NavigatorBar.module.css"
import { GetRequestAuth } from "../service/FetchService"

const links = ["Home", "Cats", "New cat", "Login"];

export default function NavigationBar(props) {
    const [elems, setElems] = useState({ "active": links[0], "isLogged": false, "isLoaded": false, name: "Log In" });
    const activeElem = elems.active;
    const token = props.token;
    useEffect(() => {
        console.log("refresh")
        if (elems.isLoaded == false) {
            GetRequestAuth("/me",
                (resp) => {
                    setElems({ ...elems, "name": resp.name, isLoggedIn: true, isLoaded: true });
                },
                (error) => {
                    setElems({ ...elems, isLoaded: true });
                },
                token);
        }
    }
    )

    const renderLinks = links.map((link) => {
        if (link === activeElem) {
            return <a key={link} className={styles.active}>{link}</a>
        } else {
            return <a key={link} className={styles.a} onClick={() => setElems({ "active": link })}>{link}</a>
        }
    });

    return (
        <div className={styles.topnav}>
            {renderLinks}
            <a key="profile" className={styles.profile}>{elems.name}</a>
        </div>
    );
}