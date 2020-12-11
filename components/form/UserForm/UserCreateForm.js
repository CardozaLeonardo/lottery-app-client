import Modal from "../Modal";
import UserForm from "./UserForm";

const UserCreateForm = ({close, alertAction, storeEvent}) => {
    
    return (

        <Modal close={close}>
            <UserForm alertAction={alertAction} close={close} storeEvent={storeEvent}/>
        </Modal>
    )
}

export default UserCreateForm;