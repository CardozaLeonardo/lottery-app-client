import { useState } from 'react';
import Container from '../layout/Container';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import RafflesList from './RafflesList';
import WinnersList from './WinnersList';
import Footer from '../layout/Footer';

const WinnersContent = () => {

    const [showWinners, setShowWinners] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="flex justify-between" >
            <Sidebar />

            <div className="w-full">
                <Container>
                    <Header />

                    <br />
                    <br />

                    {
                        showWinners ? (
                            <div className="w-full py-2">
                                <button onClick={() => setShowWinners(false)} className={`bg-transparent cursor-pointer focus:outline-none text-gray-200
                                flex items-center hover:text-opacity-75`}>
                                    <AiOutlineArrowLeft className="text-xl mr-1" />
                                    Atrás
                                </button>
                            </div>
                        ) : null
                    }

                    {
                        !showWinners ? (
                            <RafflesList setSelectedItem={setSelectedItem} setShowWinners={setShowWinners} />
                        ) : (
                            <WinnersList selectedItem={selectedItem} />
                        )
                    }

                    <div className="h-48"></div>

                    <Footer />

                </Container>
            </div>
        </div>
    )
}

export default WinnersContent;