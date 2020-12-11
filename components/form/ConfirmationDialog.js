import Modal from "./Modal";
import { AiFillQuestionCircle } from 'react-icons/ai';
import Button from "../shared/Button";
import Spinner from "../shared/Spinner";

const ConfirmationDialog = ({close, children, action, isLoading}) => {
    
    return (
        <Modal close={close}>
            <div className="px-4 py-3" style={{width: '400px'}}>

                {
                    isLoading ? (
                        <div className="flex justify-center py-2">
                            <Spinner />
                        </div>
                    ) : (
                    <>
                        <div className="flex justify-between items-start w-full">
                            <AiFillQuestionCircle className="text-6xl text-gray-200" />
                            <p className="text-center">{ children }</p>
                        </div>

                        <div className="flex justify-end mt-6">

                            <div className="w-3/5 flex justify-between">
                                <Button action={() => action()} variant="primary medium">
                                    ACEPTAR
                                </Button>

                                <Button action={() => close(false)} variant="default medium">
                                    Cancelar
                                </Button>

                            </div>
                        </div>
                    </>
                    )
                }

            </div>
        </Modal>
    )
}

export default ConfirmationDialog;