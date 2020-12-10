import Modal from "../Modal";
import RaffleForm from "./RaffleForm";

const RaffleCreateForm = ({ close, alertAction }) => {

    return (
        <Modal close={close}>
            <RaffleForm close={close} alertAction={alertAction}/>
        </Modal>
    )
}

export default RaffleCreateForm;