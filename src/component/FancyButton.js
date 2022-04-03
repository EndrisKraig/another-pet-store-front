import React from "react";
import styles from "./FancyButton.module.css"

export default function FancyButton(props){
    var action = () => {};
    if(props.action){
        action = props.action;
    }
    return (
        <button type="submit" onClick={() => action()}>{props.label}</button>
    )
}