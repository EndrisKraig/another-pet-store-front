import React, { useState, useEffect } from "react";
import styles from "./CatCardsHolder.module.css"
import Loader from "./Loader";
import { GetRequest } from "../service/FetchService.js"
import CatCard from "./CatCard";
import Pagination from "./Pagination";

export default function CatCardHolder() {

    const [data, setData] = useState({ "isLoaded": false, "limit": 10, "page": 1 });

    useEffect(() => {
        if (!data.isLoaded) {
            GetRequest("/cats?page=" + data.page + "&limit=" + data.limit,
                (resp) => {
                    setData({ ...data, "isLoaded": true, "resp": resp });
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

    var cats = data.resp.cats;
    const catsList = cats.map((cat) => {
        return (<CatCard key={cat.id} cat={cat} />)
    });

    return (
        <div className={styles.outer}>
            {catsList}
            <Pagination curPage={data.page} maxPage={data.resp.maxPage} clickAction={(page) => setData({"page":page, "isLoaded":false, "limit":data.limit})} />
        </div>
    )
}