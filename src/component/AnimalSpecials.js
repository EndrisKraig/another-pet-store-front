import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./AnimalSpecials.module.css"
import GetRequest from "../service/FetchService";
import CardSet from "./CardSet";
import Loader from "./Loader";

export default function AnimalSpecials() {

    const [specials, setSpecials] = useState({ "isLoaded": false, cur: 0});
    useEffect(() => {
        if (!specials.isLoaded) {
            GetRequest("/animals/specials",
                (resp) => {
                    setSpecials({ ...specials, isLoaded: true, data: resp.special_offers })
                },
                (err) => {

                })
        }
    });

    if (!specials.isLoaded) {
        return (<Loader />);
    }




    return (<div className={styles.out}>
        <div className={styles.in} onClick={
          () => {
              setSpecials({...specials, cur: getPrev(specials.cur, specials.data.length)});
          }  
        }>&lt;</div>
        <CardSet data={getData(specials.data, specials.cur)} />
        <div className={styles.in} onClick={
          () => {
            setSpecials({...specials, cur: getNext(specials.cur, specials.data.length)});
          }  
        }>&gt;</div>
    </div>);
}

function getData(dataFull, cur) {
    console.log(dataFull);
    console.log(cur);
    var arr = [];
    console.log(getPrev(cur, dataFull.length));
    console.log(dataFull[getPrev(cur, dataFull.length)])
    arr.push(dataFull[getPrev(cur, dataFull.length)]);
    arr.push(dataFull[cur]);
    arr.push(dataFull[getNext(cur, dataFull.length)]);
    return arr.map((e) => {
        return {
            imageUrl: e.imageUrl,
            title: e.nickname,
            description: e.breed,
            price: e.price,
            link: "http://lcoalhost:3000/",
            linkName: "Home"
        }
    }
    );
}

function getNext(cur, length){
    if(cur + 1 >= length){
            return 0;
    }else{
        return cur +1;
    }
}

function getPrev(cur, length){
    if(cur - 1 <= 0){
        return length-1;
    }else{
        return cur -1;
    }
}