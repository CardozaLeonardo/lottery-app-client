import Container from "../components/layout/Container";
import Pagination from "../components/pagination/Pagination";
import Button from "../components/shared/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import Table from "../components/shared/Table";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Reloader from "../components/shared/Reloader";


const Tab = () => {

    const [response, isLoading, error, getList] = useFetch();

    useEffect(() => {
        getList();
    }, [])

    return(
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

            { error ? (<Reloader callback={getList} />) : null }
            
            {
                response && !isLoading && !error ? (
                    <Table data={response} />
                ): (
                    <p className="text-center text-gray-500">
                        Loading...
                    </p>
                )
            }

            

            <Pagination />
        </Container>
    )
}

export default Tab;