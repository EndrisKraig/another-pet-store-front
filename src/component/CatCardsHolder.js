import React, { useState, useEffect } from "react";
import styles from "./CatCardsHolder.module.css"
import Loader from "./Loader";
import { GetRequest } from "../service/FetchService.js"
import CatCard from "./CatCard";

export default function CatCardHolder() {

    const [data, setData] = useState({ "isLoaded": false, "limit": 10, "page": 5 });

    useEffect(() => {
        if (!data.isLoaded) {
            GetRequest("/cats?page=" + data.page + "&limit=" + data.limit,
                (resp) => {
                    setData({ ...data, "isLoaded": true, "cats": resp.cats });
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    });

    if (data.isLoaded === false) {
        return <Loader />
    }

    var cats = data.cats;
    const catsList = cats.map((cat) => {
        return (<CatCard cat={cat} />)
    });
    console.log(data.cats);

    return (
        <div className={styles.outer}>
            {catsList }
        </div>
    )
}