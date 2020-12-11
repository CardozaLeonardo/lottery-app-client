import { useState } from "react";
import { getToken } from "../util/cookie";
import useSWR from 'swr';
import { getItems } from "../util/fetchers";

const BASE_URL = 'https://localhost:5001/api';

const useFetch = () => {

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getList = async (url) => {

        setIsLoading(true);
        setError(null);
        var er = null;

        const data = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${getToken()}`
            }
        }).then(respuest => {

            if(respuest.ok) {

                return respuest.json()
            }else{
                
                //setError(respuest.status)
                er = respuest.status
                return respuest.json()
                //throw new Error("Something failed!")
            }
        })
        .then((res) => { return res})
        .catch((err) => {
            //er = err
            console.log(err)
            //setError(err);
        });

        setResponse(data);
        setError(er);
        console.log(`getList ${er}`)
        setIsLoading(false);
    }

   /* const getList = (url) => {

        const {_data, _error} = useSWR(`${BASE_URL}${url}`, getItems);

        setError(_error);
        setIsLoading(!_data);
        setResponse(_data);
    }*/

    const get = async (url) => {
        setIsLoading(true);
        //setResponse(null);
        setError(null);

        const resp = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${getToken()}`
            }
        }).then(respuest => {

            if(respuest.ok) {

                console.log("confusing!!!")
                return respuest.json()
            }else{
                //setError(respuest.status)
                console.log("fail!!!")
                setError(401)
                return respuest.json()
            }
        })
        .then((res) => { return res})
        .catch(err => {console.log(err)});

        setResponse(resp);
        setIsLoading(false);
    }

    const post = async (url, data) => {
        setIsLoading(true);
        setResponse(null);
        setError(null);

        const resp = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${getToken()}`
            },
            body: JSON.stringify(data)
        }).then(respuest => {

            if(respuest.ok) {

                return respuest.json()
            }else{
                
                setError(respuest.status)
                return respuest.json()
            }
        })
        .then((res) => { return res})
        .catch(err => {setError(err.status)});

        setResponse(resp);
        setIsLoading(false);
    }

    const put = async (url, data) => {
        setIsLoading(true);
        setResponse(null);
        setError(null);

        const resp = await fetch(`${BASE_URL}${url}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${getToken()}`
            },
            body: JSON.stringify(data)
        }).then(respuest => {

            if(respuest.ok) {

                return respuest.json()
            }else{
                
                setError(respuest.status)
                return respuest.json()
            }
        })
        .then((res) => { return res})
        .catch(err => {setError(err.status)});

        setResponse(resp);
        setIsLoading(false);
    }

    const deleteRes = async (url) => {
        
        setIsLoading(true);
        //setResponse(null);
        setError(null);

        const resp = await fetch(`${BASE_URL}${url}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${getToken()}`
            },
        }).then(respuest => {

            if(respuest.ok) {

                return respuest.status
            }else{
                setError(respuest.status)
                return respuest.json()
            }
        })
        .then((res) => { return res})
        .catch(err => {setError(err.status)});

        setResponse(resp);
        setIsLoading(false);
    }

    const deleteResWithReturn = async (url) => {
        
        
        const resp = await fetch(`${BASE_URL}${url}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${getToken()}`
            },
        }).then(respuest => {

            if(respuest.ok) {

                return respuest.status
            }else{
                //setError(respuest.status)
                return respuest.json()
            }
        })
        .then((res) => { return res})
        .catch(err => {console.log(err)});

        return resp;
        
    }

    return [
        response,
        isLoading,
        error,
        {
            getList,
            put,
            post,
            get,
            deleteRes,
            deleteResWithReturn
        }
        
    ]

    
}

export default useFetch;