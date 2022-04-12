import { useEffect, useState } from "react";
import GetRequest, { PostRequest } from "../service/FetchService";
import FancyButton from "./FancyButton";
import styles from './AnimalAdder.module.css'
import Loader from "./Loader";

function AnimalAdder() {
    const [animal, setAnimal] = useState({
        "nickname": null,
        "breed": null,
        "type": null,
        "age": null,
        "imageUrl": null,
        "title": null,
        "price": 0
    });

    const [data, setData] = useState({ isLoaded: false })

    useEffect(() => {
        if (!data.isLoaded) {
            if (!data.breeds) {
                GetRequest("/references?name=breed",
                    (resp) => {
                        setData({ ...data, breeds: resp.references })
                    },
                    (err) => {

                    }
                );
            }
            if (!data.types) {
                GetRequest("/references?name=type",
                    (resp) => {
                        setData({ ...data, types: resp.references })
                    },
                    (err) => {

                    }
                );
            }
            if (data.breeds && data.types) {
                setData({ ...data, isLoaded: true })
            }
        }
    }, [data]);

    if (!data.isLoaded) {
        return (<Loader />)
    }

    const submit = e => {
        e.preventDefault();
        PostRequest("/animals", animal);
    }

    return (
        <div className={styles.out}>
            <form className={styles.in} onSubmit={submit}>
                <h2>Add new animal!</h2>
                <label>Nickname</label>
                <p />
                <input
                    type="text"
                    name="nickname"
                    onChange={e => setAnimal({ ...animal, "nickname": e.target.value })}
                />
                <p />
                <p />
                <label>Age</label>
                <p />
                <input
                    type="number"
                    name="price"
                    onChange={e => setAnimal({ ...animal, "age": Number(e.target.value) })}
                />
                <p />
                <label>Url</label>
                <p />
                <input
                    type="text"
                    name="price"
                    onChange={e => setAnimal({ ...animal, "imageUrl": e.target.value })}
                />
                <p />
                <label>Title</label>
                <p />
                <input
                    type="text"
                    name="price"
                    onChange={e => setAnimal({ ...animal, "title": e.target.value })}
                />
                <p />
                <label>Price</label>
                <p />
                <input
                    type="number"
                    name="price"
                    onChange={e => setAnimal({ ...animal, "price": Number(e.target.value) })}
                />
                <p />
                <label>Breed</label>
                <p />
                <select onChange={e => setAnimal({ ...animal, "breed": e.target.value })}>
                    {getOptions(data.breeds)}
                </select>
                <p />
                <label>Type</label>
                <p />
                <select onChange={e => setAnimal({ ...animal, "type": e.target.value })}>
                    {getOptions(data.types)}
                </select>

                <FancyButton label="Add new animal!" style={styles.submit} />
            </form>
        </div >

    );
}

function getOptions(values) {
    return values.map((v) => <option key={v.id} value={v.label}>{v.label}</option>);
}

export default AnimalAdder;