import React from "react";
import styles from "./ParamsValue.module.css"

export default function ParamCouple(props){

    return (
        <div className={styles.outer}>
            <div className={styles.param}>{props.param}:</div>
            <div className={styles.value}>{props.value}</div>
        </div>
    );

}