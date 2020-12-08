import { useState } from "react";
import Modal from "../form/Modal";
import Button from "../shared/Button";
import Alert from "../shared/Alert";
import Ticket from "./Ticket";
import { IoIosClose } from 'react-icons/io';

const dumpItem = [
    {
        number: 34,
        amount: 1289
    }
]

const RaffleBox = () => {

    const [tickets, setTickets] = useState(dumpItem);
    const [newTicket, setNewTicket] = useState(false);
    const [alert, setAlert] = useState({
        color: 'info',
        text: 'El texto fue guardado correctamente <strong>Hip</strong>'
    });

    const removeTicket = (number) => {
        var newValues = tickets.filter((i) => i.number != number);
        setTickets(newValues);
    }
    
    return(
        <div>
            <div className="pb-4">
            
            {
                alert ? (
                    <Alert color={alert.color} close={setAlert}>
                        <p>{ alert.text }</p>
                    </Alert>
                ) : null
            }
              
            </div>
            <Button action={() => setNewTicket(true)} type="button" variant="large primary center full-width">
                AGREGAR TICKET
            </Button>

            {
                newTicket ? (
                    <Modal close={setNewTicket} background="bg-transparent">
                        <Ticket addTicket={ setTickets } ticketList={tickets} close={setNewTicket} />
                    </Modal>
                ): null
            }

            <div className="my-5">
                {
                   tickets.map((ticket, index) => {
                       
                       return (
                            <div key={`tick_${index}`} className="bg-bg2 rounded flex justify-between items-center px-2 py-4 mb-1">
                                <p>Loteria { ticket.number }</p>
                                <IoIosClose onClick={() => removeTicket(ticket.number)} className="text-3xl text-blue-500 cursor-pointer" />
                            </div>
                       )
                   }) 
                }
            </div>
        </div>
    )
}

export default RaffleBox;