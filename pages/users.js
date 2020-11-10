import Container from "../components/layout/Container";
import Button from "../components/shared/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import Table from "../components/shared/Table";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Reloader from "../components/shared/Reloader";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


const Users = () => {

    const [response, isLoading, error, getList] = useFetch();
    const [pageIndex, setPageIndex] = useState(1);
    //const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getList(`https://localhost:5001/api/user?pageNumber=${pageIndex}&pageSize=10`);
    }, [pageIndex])


    return(
        <div className="flex justify-between" >

            <Sidebar>
                <div>This is empty for now!</div>
            </Sidebar>

            <div className="w-full">

               <Header />


                <Container>

                    <br />
                    <br />

                    <div className="w-full">
                        {/*<Button variant="pri-outline large center">
                        <IoIosAddCircleOutline className="text-2xl mr-1" /> Add User
                        </Button>
                        <br />
                        <Button variant="medium default">
                            FETCH DATA
    </Button> */}
                    </div>

                    { error ? (<Reloader callback={getList(`https://localhost:5001/api/user?pageNumber=${pageIndex}&pageSize=10`)} />) : null }
                    
                    {
                        response && !isLoading && !error ? (
                            <Table data={response.data} onSelectedItem={setPageIndex} pageIndex={pageIndex} totalPages={response.pages} />
                        ): (
                            <p className="text-center text-gray-500">
                                Loading...
                            </p>
                        )
                    }

                </Container>

                <Footer />
            </div>


        </div>
    )
}

export default Users;