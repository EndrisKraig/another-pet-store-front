import React, { useState } from "react";
import { PostRequest } from "../../service/FetchService"
import FancyButton from "../common/FancyButton";
import styles from "./Registration.module.css"
//TODO form validation
export default function Registration() {
    const [profile, setProfile] = useState();

    const handleSubmit = (data) => {
        PostRequest("/user", data);
    }

    return (
        <div className={styles.out}>
            <h1>Please name yourself to join our community!</h1>
            <form onSubmit={() => handleSubmit(profile)}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setProfile({ ...profile, username: e.target.value })} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setProfile({ ...profile, password: e.target.value, checked: true })} />
                </label>
                <label>
                    <p>Repeat password</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setProfile({ ...profile, email: e.target.value })} />
                </label>
                <p />
                <div>
                    <FancyButton label="Register" style={styles.btn} />
                </div>
            </form>
        </div>
    )
}