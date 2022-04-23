import React from "react";
import styles from "./FancyButton.module.css"

export default function FancyButton(props){
    var type = "submit";
    if(props.btnType){
        type = props.btnType
    }
    var action = () => {}
    if(props.btnAction){
        action = props.btnAction;
    }
    return (
        <button type={type} className={props.style} onClick={() => action()}>{props.label}</button>
    )
}