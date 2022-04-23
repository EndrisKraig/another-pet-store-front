import React from "react";
import styles from "./AnimalCard.module.css"
import FancyButton from "../common/FancyButton";
import ParamCouple from "../common/ParamCouple";

export default function AnimalCard(props) {
    var animal = props.animal;

    return (
        <div className={styles.animal_card}>

            <img src={animal.imageUrl} alt="fail" className={styles.image} />
            <div className={styles.info}>
                <div className={styles.name}>{animal.title}</div>
                <p />
                <ParamCouple param="Nickname" value={animal.nickname} />
                <ParamCouple param="Breed" value={animal.breed} />
                <ParamCouple param="Price" value={animal.price} />
                <ParamCouple param="Age" value={animal.age} />
                <ParamCouple param="Create" value={animal.createAt} />
            </div>
            <div className={styles.btn_container}>
                <FancyButton style={styles.btn} label={'Adopt now!'} btnAction={props.buttonAction} />
            </div>
        </div>
    )

}