import { useState } from "react";

const useFetch = () => {

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getList = async (url) => {

        setIsLoading(true);
        setError(null);

        const data = await fetch(url, {
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

    return [
        response,
        isLoading,
        error,
        getList
    ]

    
}

export default useFetch;