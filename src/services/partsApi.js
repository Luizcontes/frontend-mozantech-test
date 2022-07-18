import axios from "axios";

export function getData(url, type, search) {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8081/store',
        params: {
            type: type,
            query: search
        }
    })

    const data = api.get(url)
        .then(res => res.data)
        .catch(err => console.err(err))

    return data
}