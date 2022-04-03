import React, {useState} from "react";
import styles from "./Login.module.css"
import PropTypes from 'prop-types'
import FancyButton from "./FancyButton";

async function loginUser(credentials) {
    const data = new FormData();
    data.append("email", credentials.username);
    data.append("password",credentials.password);
    
    return fetch("http://localhost:8080/login", {
        method: 'POST',
        body: data,
    })
        .then(res => res.json());
}

export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const resp = await loginUser({
            username,
            password
        });
        setToken(resp.token);
        window.location.href = "/";
    }
    
    return (
        <div className={styles.login_wrapper}>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <p/>
                <div>
                    <FancyButton label="Login" action={() => window.location.href = "/"}/>
                </div>
            </form>
        </div>

    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}