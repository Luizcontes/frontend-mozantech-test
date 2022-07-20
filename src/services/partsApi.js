import axios from "axios";

export async function getData(url, type, search) {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8081/store',
        timeout: 6000,
        params: {
            type: type,
            query: search
        }
    })

    const data = await instance.get(url)
        .then(res => res.data)
        .catch(err => console.log(err.config))

    return data
}