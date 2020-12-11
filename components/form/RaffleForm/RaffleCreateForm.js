import Modal from "../Modal";
import RaffleForm from "./RaffleForm";

const RaffleCreateForm = ({ close, alertAction, storeEvent }) => {

    return (
        <Modal close={close}>
            <RaffleForm close={close} alertAction={alertAction} storeEvent={storeEvent}/>
        </Modal>
    )
}

export default RaffleCreateForm;