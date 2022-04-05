import React from "react";
import styles from "./Pagination.module.css"

export default function Pagination(props) {

    var numbers = [];
    //TODO improve pagination. 1. Show current page 2. Figure out spase between 1 page and cur + cur and last page. 3. Last page condition 4. Not clickable star (*) symbol
    const clickAction = props.clickAction;
    const maxPage = props.maxPage;
    var page = props.curPage;
    if(maxPage < 10){
        numbers = Array.from({ length: maxPage }, (_, i) => i + 1);
    }else if(page === 2 || page == 1){
        numbers.push(1);
        Array.from({ length: 7 }, (_, i) => numbers.push(page++ + 1));
        numbers.push('*');
        numbers.push(maxPage);
    }else{
        numbers.push(1)
        numbers.push('*');
        numbers.push(page-1);
        Array.from({ length: 5 }, (_, i) => numbers.push(page++ + 1));
        numbers.push('*');
        numbers.push(maxPage);
    }

    return (
        <div>
            |
            {numbers.map((num, i) => {
                return <div key={i} className={styles.block} onClick={() => clickAction(num)}>{num}</div>
            })}
            |
        </div>
    )

}