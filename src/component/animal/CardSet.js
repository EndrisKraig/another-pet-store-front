import react from "react";
import Card from "./Card";
import styles from "./CardSet.module.css"

export default function CardSet(props) {
    const {data} = props;
    const cardSet = data.map((e) => {
        return (<Card imageUrl={e.imageUrl} title={e.title} description={e.description} price={e.price} link={e.link} linkName={e.linkName}/>)
    })
    return (<div className={styles.in}>
        {cardSet}
    </div>)
}