import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { setToken, getToken } from  '../util/cookie';
//import BaseForm from "../components/form/BaseForm";
import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import Container from "../components/layout/Container";
import Button from "../components/shared/Button";
import useFetch from "../hooks/useFetch";
import { useRouter } from 'next/router';
import Spinner from "../components/shared/Spinner";

const Login = () => {

    const [response, isLoading, error, fetcher] = useFetch();
    const [userResponse, isUserLoading, userError, userFetcher] = useFetch();
    const router = useRouter();
    const token = getToken();

    useEffect(() => {
        userFetcher.get('/auth/me', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }, [])


    useEffect(() => {
        
        if(response && response.token) {

            setToken(response.token);
            router.push("/users");
        }

    }, [response])

    if(userResponse && !userResponse.username) {
        router.push("/");
    }


    const onFormSubit = (values) => {
         fetcher.post('/auth/login', values);
    }

    const formik = useFormik({
        initialValues: {username: '', password: ''},
        onSubmit: values => onFormSubit(values) 
        //validationSchema: validation  
    });

    return(
        <div>
            <Container>
                <div style={{height: '100vh'}} className="flex justify-center items-center">
                    <div className="bg-bg2 rounded px-5 py-5 w-2/5">

                    <form className="w-full" onSubmit={formik.handleSubmit}>
                           <h1 className="text-center text-white text-4xl mb-6">
                                Inicie Sesión
                            </h1>

                            <p className="text-gray-500 text-opacity-25 mb-4">
                                aslaskakslasasaslasklaskl
                                saslkslakslasklks
                            </p>
                            
                            <InputGroup label="USUARIO O CORREO">
                                <Input value={formik.values.username} callback={formik.handleChange} name="username"/>
                            </InputGroup>

                            <InputGroup label="CONTRASEÑA">
                                <Input type="password" value={formik.values.password} name="password" callback={formik.handleChange}/>
                            </InputGroup>
                            

                            {
                                isLoading ? (
                                    <Spinner />
                                ): null
                            }

                             {
                                error && error == 401 && 
                                    <p className="text-center text-red-600">¡Usuario o contraseña incorrecta!</p>
                            }

                            <br />

                            <Button type="submit" variant="large primary center full-width">
                                INGRESAR
                            </Button>
                    </form>
                     
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login;