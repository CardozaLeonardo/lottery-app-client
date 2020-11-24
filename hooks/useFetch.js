import { useState } from "react";

const BASE_URL = 'https://localhost:5001/api';

const useFetch = () => {

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getList = async (url) => {

        setIsLoading(true);
        setError(null);

        const data = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            }
        }).then(respuest => respuest.json())
        .then((res) => { return res})
        .catch(err => setError(err));

        
        setResponse(data);
        setIsLoading(false);
    }

    const get = async (url, data) => {
        setIsLoading(true);
        setError(null);

        const resp = await fetch(`${BASE_URL}${url}`, data).then(respuest => {

            if(respuest.ok) {

                return respuest.json()
            }else{
                setError(respuest.status)
            }
        })
        .then((res) => { return res})
        .catch(err => {setError(err.status)});

        setResponse(resp);
        setIsLoading(false);
    }

    const post = async (url, data) => {
        setIsLoading(true);
        setError(null);

        const resp = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(respuest => {

            if(respuest.ok) {

                return respuest.json()
            }else{
                setError(respuest.status)
            }
        })
        .then((res) => { return res})
        .catch(err => {setError(err.status)});

        setResponse(resp);
        setIsLoading(false);
    }

    return [
        response,
        isLoading,
        error,
        {
            getList,
            post,
            get
        }
        
    ]

    
}

export default useFetch;