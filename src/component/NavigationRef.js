import React from "react";

export default function NavigationRef(props){
    return (
        <a key={props.name} className={props.style} href={props.link} 
        onClick={(e) => {
            e.preventDefault();
            props.action();
            window.location.href = props.link;
        }}>{props.name}</a>
    )
}