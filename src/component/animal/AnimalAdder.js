import { useEffect, useState } from "react";
import GetRequest, { PostRequest } from "../../service/FetchService";
import FancyButton from "../common/FancyButton";
import styles from './AnimalAdder.module.css'
import Loader from "../common/Loader";
import FormField from "../common/FormField";
import FormSelectField from "../common/FormSelectField";
import FetchError from "../common/FetchError";

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
                        setData({ ...data, error: true })
                    }
                );
            }
            if (!data.types) {
                GetRequest("/references?name=type",
                    (resp) => {
                        setData({ ...data, types: resp.references })
                    },
                    (err) => {
                        setData({ ...data, error: true })
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

    if(data.error){
        return <FetchError/>
    }

    const submit = e => {
        e.preventDefault();
        PostRequest("/animals", animal);
    }

    return (
        <div className={styles.out}>
            <form className={styles.in} onSubmit={submit}>
                <h2>Add new animal!</h2>
                <FormField label="Nickname" type="text" action = {e => setAnimal({ ...animal, "nickname": e.target.value })}/>
                <FormField label="Age" type="number" action = {e => setAnimal({ ...animal, "age": Number(e.target.value) })}/>
                <FormField label="Url" type="text" action = {e => setAnimal({ ...animal, "imageUrl": e.target.value })}/>
                <FormField label="Title" type="text" action = {e => setAnimal({ ...animal, "title": e.target.value })}/>
                <FormField label="Price" type="number" action = {e => setAnimal({ ...animal, "price": Number(e.target.value) })}/>
                <FormSelectField label="Breed" options={getOptions(data.breeds)} action={e => setAnimal({ ...animal, "breed": e.target.value })}/>
                <FormSelectField label="Breed" options={getOptions(data.types)} action={e => setAnimal({ ...animal, "type": e.target.value })}/>
                <FancyButton label="Add new animal!" style={styles.submit} />
            </form>
        </div >

    );
}

function getOptions(values) {
    return values.map((v) => <option key={v.id} value={v.label}>{v.label}</option>);
}

export default AnimalAdder;