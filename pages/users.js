import { useContext } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../context';
import _ from 'lodash';

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
import Layer from '../components/shared/Layer';
import UserCreateForm from '../components/form/UserForm/UserCreateForm';
import UserUpdateForm from '../components/form/UserForm/UserUpdateForm';
import getUserTableHeader from '../util/headers/UserTableHeader';
import Spinner from '../components/shared/Spinner';
import ConfirmationDialog from '../components/form/ConfirmationDialog';
import Alert from '../components/shared/Alert';



const Users = () => {

    const router = useRouter();
    const { user, setUser, setLayer } = useContext(MainContext);

    const [response, isLoading, error, fetcher] = useFetch();
    const [userResponse, isUserLoading, userError, userFetcher] = useFetch();
    const [delResponse, delLoading, delError, delFetcher] = useFetch();

    const [pageIndex, setPageIndex] = useState(1);
    const [visibleForm, setVisibleForm] = useState(false);
    const [visibleUpdateForm, setVisibleUpdateForm] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [alert, setAlert] = useState(null);

    const onAddUser = () => {
        setLayer(true);
        setVisibleForm(true);
    }

    

    const onDeletedSelect = (value) => {
        setShowDialog(p => !p);
        setSelectedItem(value);
    }

    const onUpdateSelected = (value) => {
        setSelectedItem(value);
        setVisibleUpdateForm(true);
    }

    const onDeleteUser = async () => {

        await delFetcher.deleteRes(`/user/${selectedItem}`);

        if(delResponse) {
            setShowDialog(false);
            setAlert({
                color: 'success',
                text: 'Se ha eliminado el usuario correctamente'
            });
        }
    }

    

    useEffect(() => {
       
       if(!error) {
           
          fetcher.getList(`/user/list?pageNumber=${pageIndex}&pageSize=10`);
          
       }

    }, [pageIndex])

    

    useEffect(() => {
        if(userResponse) {
            setUser(userResponse);
        } else {

            userFetcher.get('/auth/me');
        }
        console.log("Hola");
        console.log(userError);

        if(userError && userError == 401) {
            console.log("Holaa");
            router.replace("/login");
        } else if(userError && userError == 403) {
            router.replace("/logins");
        }

    }, [userResponse])

    


    return(
        <div className="flex justify-between relative" >
           
           <Layer />

           {
               showDialog ? (
                   <ConfirmationDialog close={setShowDialog} action={onDeleteUser} isLoading={delLoading}>
                       ¿Está seguro de continuar con la acción?
                   </ConfirmationDialog>
               ): null
            }

           {
               visibleForm ? (
                 <UserCreateForm close={setVisibleForm}  alertAction={setAlert}/>
               ): null
           }

           {
               visibleUpdateForm ? (
                 <UserUpdateForm close={setVisibleUpdateForm} selectedItem={selectedItem} alertAction={setAlert}/>
               ): null
           }
            
            <Sidebar />

            <div className="w-full">

               <Header />


                <Container>

                    <br />
                    <br />
                    {
                        alert ? (
                            <Alert color={alert.color} close={setAlert}>
                                <p>{ alert.text }</p>
                            </Alert>
                        ) : null
                    }


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

                    { error && !isLoading && <Reloader callback={fetcher.getList(`/user/list?pageNumber=${pageIndex}&pageSize=10`)} /> }
                    
                    {
                        response && !isLoading && !error ? (
                            <Table data={response.data} onSelectedItem={setPageIndex} 
                            pageIndex={pageIndex} totalPages={response.pages} columns={getUserTableHeader(onDeletedSelect, onUpdateSelected)} />
                        ): (
                            <div className="py-3">
                                <Spinner />
                            </div>
                        )
                    }

                </Container>

                <Footer />
            </div>


        </div>
    )
}

export default Users;