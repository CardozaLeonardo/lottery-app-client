import Modal from "../Modal";
import UserForm from "./UserForm";

const UserCreateForm = ({close, alertAction}) => {
    
    return (

        <Modal close={close}>
            <UserForm alertAction={alertAction}/>
        </Modal>
    )
}

export default UserCreateForm;