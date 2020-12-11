import { useState } from "react";
import RafflesListPlayer from "./RafflesListPlayer";
import RaffleBox from '../ticket/RaffleBox';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const PlayerContent = () => {

    const [showTicketBox, setShowTicketBox] = useState(false);
    const [selectedRaffle, setSelectedRaffle] = useState(null);

    return (
        <div className="w-full" >
            
            {
                showTicketBox ? (
                    <div className="w-full py-2 mb-3">
                        <button onClick={() => setShowTicketBox(false)} className={`bg-transparent cursor-pointer focus:outline-none text-gray-200
                        flex items-center hover:text-opacity-75`}>
                            <AiOutlineArrowLeft className="text-xl mr-1" />
                            Atrás
                        </button>
                    </div>
                ) : null
            }

            <h1 className="text-3xl text-gray-200 mb-4">Participe en un sorteo</h1>

            {
                !showTicketBox ? (
                    <RafflesListPlayer setSelectedItem={setSelectedRaffle} setShowTicketBox={setShowTicketBox} />
                ) : (
                    <RaffleBox selectedItem={selectedRaffle} />
                )
            }

        </div>
    )
}

export default PlayerContent;