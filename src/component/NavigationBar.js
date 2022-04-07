import React, { useEffect, useState } from "react";
import styles from "./NavigatorBar.module.css"
import { GetRequestAuth } from "../service/FetchService"
import NavigationRef from "./NavigationRef";

const links = [{"name":"Home", "link":"/"},{"name":"Cats", "link":"/cats"},{"name":"Add cat", "link":"/add"}];

export default function NavigationBar(props) {
    var activeTab = "Home";
    const savedTab = sessionStorage.getItem('activeTab');
    if(savedTab === null){
        sessionStorage.setItem('activeTab', "Home");
    }
    const [elems, setElems] = useState({ "active": sessionStorage.getItem('activeTab'), "isLogged": false, "isLoaded": false, name: "Log In" });
    const activeElem = elems.active;
    const token = props.token;
    useEffect(() => {
        if (elems.isLoaded === false && token) {
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
    );
    const updateActiveLink = (link) => sessionStorage.setItem('activeTab', link);

    const renderLinks = links.map((l) => {
        if (l.name === activeElem) {
            return createNavigationRef(l.name, styles.active, l.link, () => updateActiveLink(l.name));
        } else {
            return createNavigationRef(l.name, styles.a, l.link, () => updateActiveLink(l.name));
        }
    });
    var profileLink;
    if(elems.isLogged === true){
        profileLink = "/profile";
    }else{
        profileLink = "login";
    }
    renderLinks.push(
        createNavigationRef(elems.name, styles.profile, profileLink, () => {})
    )
    return (
        <div className={styles.topnav}>
            {renderLinks}
        </div>
    );
}

function createNavigationRef(name, style, ref, action) {
    return (<NavigationRef key={name} name={name} style={style} link={ref} action={action} />);
}