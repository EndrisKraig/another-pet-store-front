import React, { useEffect, useState } from "react";
import styles from "./NavigatorBar.module.css"
import { GetRequestAuth } from "../service/FetchService"
import NavigationRef from "./NavigationRef";
import NavigationProfile from "./NavigationProfile";

const links = [{"name":"Home", "link":"/"},{"name":"Animals", "link":"/animals"},{"name":"Add animal", "link":"/add"}];

export default function NavigationBar(props) {
    const savedTab = sessionStorage.getItem('activeTab');
    if(savedTab === null){
        sessionStorage.setItem('activeTab', "Home");
    }
    const [elems, setElems] = useState({ "active": sessionStorage.getItem('activeTab'), "isLoggedIn": false, "isLoaded": false, name: "Log In" });
    const activeElem = elems.active;
    const token = props.token;
    useEffect(() => {
        if (elems.isLoaded === false && token) {
            GetRequestAuth("/profile",
                (resp) => {
                    setElems({ ...elems, nickname: resp.nickname, isLoggedIn: true, isLoaded: true, balance: resp.balance });
                },
                (error) => {
                    setElems({ ...elems, isLoaded: true });
                },
                token);
        }
    }
    );
    const updateActiveLink = (link) => sessionStorage.setItem('activeTab', link);

    const renderLinks = links.map((l) => {
        if (l.name === activeElem) {
            return createNavigationRef(l.name, styles.active, l.link, () => updateActiveLink(l.name));
        } else {
            return createNavigationRef(l.name, styles.a, l.link, () => updateActiveLink(l.name));
        }
    });

    if(elems.isLoggedIn === true){
        renderLinks.push(
            <NavigationProfile key={elems.nickname} linkName={elems.nickname} style={styles.profile} link={"/profile"} action={() => {}} balance={elems.balance}/>
        )
    }else{
        renderLinks.push(
            createNavigationRef(elems.name, styles.profile, "/login", () => {})
        )
    }
    
    return (
        <div className={styles.topnav}>
            {renderLinks}
        </div>
    );
}

function createNavigationRef(name, style, ref, action) {
    return (<NavigationRef key={name} name={name} style={style} link={ref} action={action} />);
}