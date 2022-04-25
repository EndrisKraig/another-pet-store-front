import React, { useState, useEffect } from "react";
import styles from "./AnimalCardsHolder.module.css"
import Loader from "../common/Loader";
import { GetRequest } from "../../service/FetchService.js"
import AnimalCard from "./AnimalCard";
import Pagination from "..//Pagination";
import FetchError from "../common/FetchError";

export default function AnimalCardHolder() {

    const [data, setData] = useState({ "isLoaded": false, "limit": 10, "page": 1, isError: false });

    useEffect(() => {
        if (!data.isLoaded) {
            GetRequest("/animals?page=" + data.page + "&limit=" + data.limit,
                (resp) => {
                    setData({ ...data, isLoaded: true, resp: resp });
                },
                (error) => {
                    setData({...data, isLoaded: true, isError: true });
                }
            );
        }
    });

    if (data.isLoaded === false) {
        return <Loader />
    }

    if(data.isError === true){
        return (<FetchError/>)
    }

    var animals = data.resp.animals;
    const animalsList = animals.map((animal) => {
        return (<AnimalCard key={animal.id} animal={animal} />)
    });

    return (
        <div className={styles.outer}>
            {animalsList}
            <Pagination className={styles.outer} currentPage={data.page} pageSize={data.limit} totalPageCount={data.resp.maxPage} onPageChange={(page) => setData({"page":page, "isLoaded":false, "limit":data.limit})} />
        </div>
    )
}