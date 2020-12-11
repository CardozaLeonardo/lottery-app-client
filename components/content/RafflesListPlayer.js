import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import getRaffleForPlayers from '../../util/headers/RaffleForPlayers';
import Reloader from "../shared/Reloader";
import Spinner from '../shared/Spinner';
import Table from "../shared/Table";


const RafflesListPlayer = ({ setSelectedItem, setShowTicketBox }) => {

    const [response, isLoading, error, fetcher] = useFetch();
    const [pageIndex, setPageIndex] = useState(1);

    const onItemSelected = (value) => {
        //console.log('RLP: ' + value);
        setSelectedItem(value);
        setShowTicketBox(true);
    }

    useEffect(() => {
       
        if(!error) {
            
           fetcher.getList(`/raffle?pageNumber=${pageIndex}&pageSize=10`);
        }
 
     }, [pageIndex])

    return (
        <>
            { error && !isLoading && <Reloader callback={fetcher.getList(`/raffle?pageNumber=${pageIndex}&pageSize=10`)} /> }
                    
            {
                response && !isLoading && !error ? (
                    <Table data={response.data} onSelectedItem={setPageIndex} 
                    pageIndex={pageIndex} totalPages={response.pages} columns={getRaffleForPlayers(onItemSelected)} />
                ): (
                    <div className="py-3">
                        <Spinner />
                    </div>
                )
            }
        </>
    )
}

export default RafflesListPlayer;