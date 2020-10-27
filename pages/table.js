import Container from "../components/layout/Container";
import Pagination from "../components/pagination/Pagination";
import Button from "../components/shared/Button";
import { IoIosAddCircleOutline } from "react-icons/io";


const Table = () => {
    return (
 
        <Container>
            <div className="w-full">
                <Button variant="pri-outline large center">
                   <IoIosAddCircleOutline className="text-2xl mr-1" /> Add User
                </Button>
                <br />
                <Button variant="medium default">
                    FETCH DATA
                </Button>
            </div>
            
            
            <div className="h-10 flex py-2 px-6 items-center bg-bg2 mt-1 justify-between hover:bg-blue-900 text-xs">
                <div className="w-full">Gilberto Aparecido</div>
                <div className="w-full">Da Silva</div>
                <div className="w-full">928-2782-xx</div>
                <div className="w-full flex justify-between">
                    fakecorreo@gmail.com
                    <strong className="text-active">¡Ganador!</strong>
                </div>
            </div>
            <Pagination />
        </Container>
    )
}

export default Table;