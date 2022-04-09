import { useState } from "react";
import { PostRequest } from "../service/FetchService";
import FancyButton from "./FancyButton";
import styles from './AnimalAdder.module.css'

function AnimalAdder() {
    const [animal, setAnimal] = useState({
        "nickname": null,
        "breed": null,
        "price": 0
    });

    const submit = e => {
        e.preventDefault();
        PostRequest("/animal", animal);
        alert('Animal added!');
      }
    


    return (
        <div className={styles.out}>
            <form className={styles.in} onSubmit={submit}>
                <h2>Add new animal!</h2>
                <label>Nickname</label>
                <p/>
                <input
                    type="text"
                    name="nickname"
                    onChange={e => setAnimal({ ...animal, "nickname": e.target.value })}
                />
                <p/>
                <label>Breed</label>
                <p/>
                <input
                    type="text"
                    name="breed"
                    onChange={e => setAnimal({ ...animal, "breed": e.target.value })}
                />
                <p/>
                <label>Price</label>
                <p/>
                <input
                    type="number"
                    name="price"
                    onChange={e => setAnimal({ ...animal, "price": Number(e.target.value) })}
                />
                <p/>
                <FancyButton label="Add new animal!"/>
            </form>
        </div>

    );
}

export default AnimalAdder;