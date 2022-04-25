import react from "react";
import styles from "./FetchError.module.css"

export default function FetchError(){
    return (
        <div className={styles.error}>
            Sorry, something went wrong! Try reload this page<br/>
            If you constantly see this page, please write to <a href="mailto:support@anotherpetstore.io">support@anotherpetstore.io</a>
        </div>
    );
}