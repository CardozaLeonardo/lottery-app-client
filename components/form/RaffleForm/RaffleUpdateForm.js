import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../shared/Spinner";
import Modal from "../Modal";
import RaffleForm from './RaffleForm';

const RaffleUpdateForm = ({ selectedItem, close, alertAction, storeEvent }) => {

    const [response, isLoading, error, fetcher] = useFetch();

    useEffect(() => {

        if(!response && !error) {

            fetcher.get(`/raffle/${selectedItem}`)
        }

    }, [response])
    
    return (
        <>
            <Modal close={close}>

                { response && <RaffleForm data={ response } itemId={selectedItem} 
                update={true} alertAction={alertAction} storeEvent={storeEvent} close={close} /> }

                { isLoading &&
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                }
            </Modal>
        </>
    )
}

export default RaffleUpdateForm;