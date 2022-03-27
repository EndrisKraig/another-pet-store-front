
const BASE_URL = "http://localhost:8080";

function GetRequest(path, resultSaver, errorSaver) {
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

export default GetRequest;