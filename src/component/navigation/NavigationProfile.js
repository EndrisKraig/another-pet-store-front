import React from "react";
import NavigationRef from "./NavigationRef";
import styles from "./NavigationProfile.module.css"

export default function NavigationProfile(props) {
    const { linkName, style, ref, action, balance } = props;
    return (<div>
        <div>
            <NavigationRef key={linkName} name={linkName} style={style} link={ref} action={action} />
        </div>
        <div className={styles.balance}>{balance} $</div>

    </div>);

}