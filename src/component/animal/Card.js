import react from "react";
import styles from "./Card.module.css"

export default function Card(props) {
    const { imageUrl,
        title,
        description,
        price,
        link,
        linkName
    } = props;
    return (
        <div className={styles.in}>
            <img src={imageUrl} alt="animal" />
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
            <a href={link}>{linkName}</a>
        </div>
    );
}