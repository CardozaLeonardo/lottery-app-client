import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import Container from "../components/layout/Container";
import Button from "../components/shared/Button";

const Login = () => {

    return(
        <div>
            <Container>
                <div style={{height: '100vh'}} className="flex justify-center items-center">
                    <div className="bg-bg2 rounded px-2 py-2 w-1/3">
                        <form className="px-3">

                            <h1 className="text-center text-white text-4xl">
                                Inicie Sesión
                            </h1>
                            
                            <InputGroup label="Usuario">
                                <Input />
                            </InputGroup>

                            <InputGroup label="Contraseña">
                                <Input />
                            </InputGroup>
                            <Button type="submit" variant="medium primary center full-width">
                                Ingresar
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login;