import React from "react";
import styles from "./CatCard.module.css"
import ParamCouple from "./ParamCouple";

export default function CatCard(props) {
    var cat = props.cat;
    
    return (
        <div className={styles.cat_card}>

            <img src={cat.imageUrl} alt="fail" className={styles.image} />
            <div className={styles.info}>
                <div className={styles.name}>{cat.title}</div>
                <p />
                <ParamCouple param="Nickname" value={cat.nickname} />
                <ParamCouple param="Breed" value={cat.breed} />
                <ParamCouple param="Price" value={cat.price} />
                <ParamCouple param="Age" value={cat.age} />
                <ParamCouple param="Create" value={cat.createAt} />
            </div>
        </div>
    )

}