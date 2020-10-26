import { useState } from "react";

const useFetch = () => {

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getList() {

        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-type':'application/json',
            }
        }).then(respuest => respuest.json()).then(respuest => response = respuest)
        .catch(err => error = err);
    }

    
}

export default useFetch;