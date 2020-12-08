import { getToken } from "../util/cookie";

//const BASE_URL = "https://localhost:5001/api";

export const getItems = async (url) => {

    const res = await fetch(`${url}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${getToken()}`
        }
    })

    if(!res.ok) {
        const error = new Error("Something went wrong...")

        error.info = await res.json()
        error.status = res.status
        throw error
    }

    return res.json()
}