const BASE_URL = "http://localhost:8080";

export function GetRequest(path, resultSaver, errorSaver) {
    fetch(BASE_URL + path)
        .then(res => res.json())
        .then(
            (result) => {
                resultSaver(result);
            },
            (error) => {
                errorSaver(error);
            }
        )
}

export function GetRequestAuth(path, resultSaver, errorSaver, token) {
    fetch(BASE_URL + path, {
        headers: new Headers({
            'Authorization': token
        }),
    })
        .then(res => res.json())
        .then(
            (result) => {
                resultSaver(result);
            },
            (error) => {
                errorSaver(error);
            }
        )
}

export function PostRequest(path, data) {

    fetch(BASE_URL + path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json());

}

export default GetRequest;