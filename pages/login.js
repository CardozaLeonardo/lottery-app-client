import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
//import BaseForm from "../components/form/BaseForm";
import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import Container from "../components/layout/Container";
import Button from "../components/shared/Button";
import useFetch from "../hooks/useFetch";
import { useRouter } from 'next/router';

const Login = () => {

    const [response, isLoading, error, fetcher] = useFetch();
    const router = useRouter();
    const [fail, setFail] = useState(false);

    useEffect(() => {
        
        if(response) {

            
            Cookies.set('access_token', response.token)
            router.push("/users");
        }

    }, [response])


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
                                    <p className="text-center text-gray-200">Cargando...</p>
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