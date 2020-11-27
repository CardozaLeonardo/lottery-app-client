import { useContext } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../context';
import Cookies from 'js-cookie';

import Container from "../components/layout/Container";
import Button from "../components/shared/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineDashboard, AiOutlineUserSwitch } from 'react-icons/ai';
import Table from "../components/shared/Table";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Reloader from "../components/shared/Reloader";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SidebarOption from "../components/shared/SidebarOption";
import Layer from '../components/shared/Layer';
import UserForm from '../components/form/UserForm';



const Users = () => {

    const router = useRouter();
    const { user, setUser, setLayer } = useContext(MainContext);

    const [response, isLoading, error, fetcher] = useFetch();
    const [userResponse, isUserLoading, userError, userFetcher] = useFetch();
    const [pageIndex, setPageIndex] = useState(1);
    const token = Cookies.get('access_token');
    const [visibleForm, setVisibleForm] = useState(false);

    const onAddUser = () => {
        setLayer(true);
        setVisibleForm(true);
    }

    useEffect(() => {
       
        
       fetcher.getList(`/user?pageNumber=${pageIndex}&pageSize=10`);

       
    }, [pageIndex])

    useEffect(() => {
        if(userResponse) {
            setUser(userResponse);
        } else {

            userFetcher.get('/auth/me', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }

    }, [userResponse])


    return(
        <div className="flex justify-between relative" >
           
           <Layer />

           {
               visibleForm ? (
                 <UserForm close={setVisibleForm} />
               ): null
           }
            
            <Sidebar>
                <div>This is empty for now!</div>

                <div className="mt-12">

                    <div className="pt-10">

                    <SidebarOption action={() => router.push("/")}>
                        <AiOutlineDashboard className="mr-2 text-xl" />
                        Dashboard
                    </SidebarOption>

                    <SidebarOption action={() => router.push("/users")} active>
                        <AiOutlineUserSwitch className="mr-2 text-xl" />
                        Usuarios
                    </SidebarOption>
                    </div>
                </div>

            </Sidebar>

            <div className="w-full">

               <Header />


                <Container>

                    <br />
                    <br />


                    <div className="w-full">
                        {/*
                        <br />
                        <Button variant="medium default">
                            FETCH DATA
    </Button> */}
                        <Button action={onAddUser} variant="pri-outline large center">
                           <IoIosAddCircleOutline className="text-2xl mr-1" /> Add User
                        </Button>
                    </div>

                    { error ? (<Reloader callback={fetcher.getList(`/user?pageNumber=${pageIndex}&pageSize=10`)} />) : null }
                    
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