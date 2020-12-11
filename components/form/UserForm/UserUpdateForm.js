import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../shared/Spinner";
import Modal from "../Modal";
import UserForm from "./UserForm";

const UserUpdateForm = ({ selectedItem, close, alertAction, storeEvent }) => {

    const [response, isLoading, error, fetcher] = useFetch();

    useEffect(() => {

        if(!response && !error) {

            fetcher.get(`/user/${selectedItem}`)
        }

    }, [response])

    return (
        <>
        <Modal close={close}>

            { response && <UserForm data={ response } userId={selectedItem} update={true}
             storeEvent={storeEvent} alertAction={alertAction} /> }

            {isLoading &&
                <div className="flex justify-center">
                    <Spinner />
                </div>
           }
        </Modal>
            
        </>
    )
}

export default UserUpdateForm;