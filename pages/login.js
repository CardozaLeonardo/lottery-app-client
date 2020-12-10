import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { setToken, getToken } from  '../util/cookie';
import * as Yup from 'yup';

import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import Container from "../components/layout/Container";
import Button from "../components/shared/Button";
import useFetch from "../hooks/useFetch";
import { useRouter } from 'next/router';
import Spinner from "../components/shared/Spinner";

const loginValidationSchema = Yup.object({

    username: Yup.string()
    .min(5, 'Muy corto')
    .max(40, 'Muy largo')
    .required('Requerido'),

    password: Yup.string()
    .min(8, 'Muy corto')
    .max(40, 'Muy largo')
    .required('Requerido'),
});

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
            //router.push("/users");
            window.location.replace('./');
        }

    }, [response])

    if(userResponse && !userResponse.username) {
        router.push("/");
    }


    const onFormSubit = (values) => {
         fetcher.post('/auth/login', values);
    }

    const { values, errors, handleSubmit, handleChange, touched } = useFormik({
        initialValues: {username: '', password: ''},
        onSubmit: values => onFormSubit(values),
        validationSchema: loginValidationSchema  
    });

    return(
        <div>
                <div style={{height: '100vh'}} className="flex justify-center items-center">
                    <div className="bg-bg2 rounded px-5 py-5" style={{width: '400px'}}>

                    <form className="w-full" onSubmit={handleSubmit} autoComplete="OFF">
                           <h1 className="text-center text-white text-4xl mb-6">
                                Iniciar Sesión
                            </h1>

                            <p className="text-gray-500 text-opacity-25 mb-4">
                                Presente sus credenciales
                            </p>
                            
                            <InputGroup label="USUARIO O CORREO">
                                <Input value={values.username} callback={handleChange} name="username"/>
                                { touched.username && errors.username && <p className="text-xs text-red-500">{errors.username}</p> }
                            </InputGroup>

                            <InputGroup label="CONTRASEÑA">
                                <Input type="password" value={values.password} name="password" callback={handleChange}/>
                                { touched.password && errors.password && <p className="text-xs text-red-500">{errors.password}</p> }
                            </InputGroup>
                            

                            {
                                isLoading ? (
                                    <Spinner height={10} width={3} />
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
        </div>
    )
}

export default Login;