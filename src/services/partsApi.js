import axios from "axios";

export function getData(url) {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8081/store'
    })

    const data = api.get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    return data
}