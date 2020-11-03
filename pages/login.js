import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import Container from "../components/layout/Container";
import Button from "../components/shared/Button";

const Login = () => {

    return(
        <div>
            <Container>
                <div style={{height: '100vh'}} className="flex justify-center items-center">
                    <div className="bg-bg2 rounded px-4 py-5 w-2/5">
                        <form className="px-3">

                            <h1 className="text-center text-white text-4xl mb-6">
                                Inicie Sesión
                            </h1>

                            <p className="text-gray-500 text-opacity-25 mb-4">
                                aslaskakslasasaslasklaskl
                                saslkslakslasklks
                            </p>
                            
                            <InputGroup label="USUARIO O CORREO">
                                <Input />
                            </InputGroup>

                            <InputGroup label="CONTRASEÑA">
                                <Input />
                            </InputGroup>
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