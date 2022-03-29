import React from "react";
import styles from "./FancyButton.module.css"

export default function FancyButton(props){

    return (
        <button type="submit">{props.label}</button>
    )
}