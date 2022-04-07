import { useState } from "react";
import { PostRequest } from "../service/FetchService";
import FancyButton from "./FancyButton";
import styles from './CatAdder.module.css'

function CatAdder() {
    const [cat, setCat] = useState({
        "nickname": null,
        "breed": null,
        "price": 0
    });

    const submit = e => {
        e.preventDefault();
        PostRequest("/cats", cat);
        alert('Cat added!');
      }
    


    return (
        <div className={styles.out}>
            <form className={styles.in} onSubmit={submit}>
                <h2>Add new cat!</h2>
                <label>Nickname</label>
                <p/>
                <input
                    type="text"
                    name="nickname"
                    onChange={e => setCat({ ...cat, "nickname": e.target.value })}
                />
                <p/>
                <label>Breed</label>
                <p/>
                <input
                    type="text"
                    name="breed"
                    onChange={e => setCat({ ...cat, "breed": e.target.value })}
                />
                <p/>
                <label>Price</label>
                <p/>
                <input
                    type="number"
                    name="price"
                    onChange={e => setCat({ ...cat, "price": Number(e.target.value) })}
                />
                <p/>
                <FancyButton label="Add new cat!"/>
            </form>
        </div>

    );
}

export default CatAdder;