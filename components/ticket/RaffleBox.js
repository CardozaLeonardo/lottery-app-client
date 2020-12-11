import { useState, useEffect } from "react";
import Modal from "../form/Modal";
import Button from "../shared/Button";
import Alert from "../shared/Alert";
import Ticket from "./Ticket";
import { IoIosClose } from 'react-icons/io';
import useFetch from "../../hooks/useFetch";
import Spinner from "../shared/Spinner";



const RaffleBox = ({ selectedItem=6 }) => {

    const [tickets, setTickets] = useState([]);
    const [newTicket, setNewTicket] = useState(false);
    const [alert, setAlert] = useState(null);
    const [response, isLoading, error, fetcher] = useFetch();
    const [storeEvent, setStoreEvent] = useState(true);

    /*useEffect(() => {
       
        if(!error) {
            fetcher.getList(`/raffle/get-player-result/${selectedItem}`);
        }
 
     }, [response])*/

    useEffect(() => {
       
        if(storeEvent) {
            fetcher.getList(`/raffle/get-player-result/${selectedItem}`);
        }

        setStoreEvent(false);
 
     }, [storeEvent])

     



    const removeTicket = (number) => {
        var newValues = tickets.filter((i) => i.betNumber != number);
        setTickets(newValues);
    }

    const addTicket = () => {
        if(!response || response.raffleResults.length < 5){
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
            <div className="w-2/3 py-3">

                <Button action={() => addTicket()} type="button" variant="large primary center full-width">
                    AGREGAR TICKET
                </Button>
            </div>

           { response && response.raffleResults && 
           <p className="my-2">{`Boletos: ${response.raffleResults.length} de 5`}</p> }

            {
                newTicket ? (
                    <Modal close={setNewTicket} background="bg-transparent">
                        <Ticket addTicket={ setTickets } ticketList={response && response.raffleResults ? response.raffleResults : tickets} 
                        raffleId={selectedItem} close={setNewTicket} setStoreEvent={setStoreEvent} />
                    </Modal>
                ): null
            }

            {
                response && response.raffleResults ? (
                    <div className="my-5 w-2/3">
                        {
                        response.raffleResults.map((ticket, index) => {
                            
                            return (
                                    <div key={`tick_${index}`} className="bg-bg2 rounded flex justify-between items-center px-2 py-2 mb-1">
                                        <div className="flex w-full">
                                            <div className="w-1/3">
                                                <p className="text-gray-200 text-opacity-50 text-xs">Número</p>
                                                <p className="text-gray-200 text-base">{ ticket.betNumber }</p>
                                            </div>
                                            <div className="w-1/3">
                                                <p className="text-gray-200 text-opacity-50 text-xs">Cantidad invertida</p>
                                                <p className="text-gray-200 text-base">{ `C$ ${ticket.bet}` }</p>
                                            </div>
                                        </div>
                                        <IoIosClose onClick={() => removeTicket(ticket.betNumber)} className="text-3xl text-blue-500 cursor-pointer hover:text-blue-800" />
                                    </div>
                            )
                        }) 
                        }
                    </div>
                ): (
                    <div className="py-3 flex justify-center">
                        <Spinner />
                    </div>
                )
            }

            
        </div>
    )
}

export default RaffleBox;