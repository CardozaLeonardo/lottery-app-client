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

    const addTicket = () => {
        if(tickets.length < 5){
            setNewTicket(true)
        } 

        console.log(tickets.length)
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
            <Button action={() => addTicket()} type="button" variant="large primary center full-width">
                AGREGAR TICKET
            </Button>

           { tickets && <p className="my-2">{`Boletos: ${tickets.length} de 5`}</p> }

            {
                newTicket ? (
                    <Modal close={setNewTicket} background="bg-transparent">
                        <Ticket addTicket={ setTickets } ticketList={tickets} close={setNewTicket} />
                    </Modal>
                ): null
            }

            <div className="my-5 w-2/3">
                {
                   tickets.map((ticket, index) => {
                       
                       return (
                            <div key={`tick_${index}`} className="bg-bg2 rounded flex justify-between items-center px-2 py-2 mb-1">
                                <div className="flex w-full">
                                    <div className="w-1/3">
                                        <p className="text-gray-200 text-opacity-50 text-xs">Número</p>
                                        <p className="text-gray-200 text-base">{ ticket.number }</p>
                                    </div>
                                    <div className="w-1/3">
                                        <p className="text-gray-200 text-opacity-50 text-xs">Cantidad invertida</p>
                                        <p className="text-gray-200 text-base">{ `C$ ${ticket.amount}` }</p>
                                    </div>
                                </div>
                                <IoIosClose onClick={() => removeTicket(ticket.number)} className="text-3xl text-blue-500 cursor-pointer hover:text-blue-800" />
                            </div>
                       )
                   }) 
                }
            </div>
        </div>
    )
}

export default RaffleBox;