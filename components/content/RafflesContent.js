import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../../context';
import useFetch from '../../hooks/useFetch';
import Alert from '../shared/Alert';
import Reloader from "../shared/Reloader";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Layer from '../shared/Layer';
import RaffleCreateForm from '../form/RaffleForm/RaffleCreateForm';
import RaffleUpdateForm from '../form/RaffleForm/RaffleUpdateForm';
import getRaffleTableHeader from '../../util/headers/RaffleTableHeader';
import Spinner from '../shared/Spinner';
import ConfirmationDialog from '../form/ConfirmationDialog';
import Table from "../shared/Table";
import Container from "../layout/Container";
import Button from "../shared/Button";
import { IoIosAddCircleOutline } from "react-icons/io";

const RafflesContent = () => {

    const router = useRouter();
    const { setLayer } = useContext(MainContext);
    const [response, isLoading, error, fetcher] = useFetch();
    const [delResponse, delLoading, delError, delFetcher] = useFetch();

    const [pageIndex, setPageIndex] = useState(1);
    const [visibleForm, setVisibleForm] = useState(false);
    const [visibleUpdateForm, setVisibleUpdateForm] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [alert, setAlert] = useState(null);
    const [storeEvent, setStoreEvent] = useState(false);

    const onAddRaffle = () => {
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

    const onDeleteRaffle = async () => {

        var code = await delFetcher.deleteResWithReturn(`/raffle/${selectedItem}`);

        if(code && code == 200) {
            setShowDialog(false);
            setAlert({
                color: 'success',
                text: 'Se ha eliminado el sorteo correctamente'
            });
            setStoreEvent(true);
        }
    }

    /*if(delResponse && delResponse == 200 && !storeEvent) {
        setShowDialog(false);
        setAlert({
            color: 'success',
            text: 'Se ha eliminado el sorteo correctamente'
        });
        setStoreEvent(true);
        
    }*/

    useEffect(() => {
       
        if(!error) {
           fetcher.getList(`/raffle?pageNumber=${pageIndex}&pageSize=10`);
        }

     }, [pageIndex])

     useEffect(() => {

        if(storeEvent) {
            fetcher.getList(`/raffle?pageNumber=${pageIndex}&pageSize=10`);
        }

        setStoreEvent(false);
     }, [storeEvent])

    return (
        <div className="flex justify-between" >
            <Layer />
            <Sidebar />

            {
               showDialog ? (
                   <ConfirmationDialog close={setShowDialog} action={onDeleteRaffle} isLoading={delLoading}>
                       ¿Está seguro de continuar con la acción?
                   </ConfirmationDialog>
               ): null
            }

           {
               visibleForm ? (
                 <RaffleCreateForm close={setVisibleForm}  alertAction={setAlert} storeEvent={setStoreEvent}/>
               ): null
           }

           {
               visibleUpdateForm ? (
                 <RaffleUpdateForm close={setVisibleUpdateForm} selectedItem={selectedItem}  alertAction={setAlert} storeEvent={setStoreEvent}/>
               ): null
           }


            <div className="w-full">
                <Container>
                    <Header />

                    <br />
                    <br />
                    {
                        alert ? (
                            <Alert color={alert.color} close={setAlert}>
                                <p>{ alert.text }</p>
                            </Alert>
                        ) : null
                    }

                    <div className="w-full py-2">
                        
                        <Button action={onAddRaffle} variant="pri-outline large center">
                           <IoIosAddCircleOutline className="text-2xl mr-1" /> Agregar Sorteo
                        </Button>
                    </div>

                    { error && !isLoading && <Reloader callback={fetcher.getList(`/raffle?pageNumber=${pageIndex}&pageSize=10`)} /> }
                    
                    {
                        response && !isLoading && !error ? (
                            <Table data={response.data} onSelectedItem={setPageIndex} 
                            pageIndex={pageIndex} totalPages={response.pages} columns={getRaffleTableHeader(onDeletedSelect, onUpdateSelected)} />
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

export default RafflesContent;