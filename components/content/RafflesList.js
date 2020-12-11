import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import getRaffleResults from '../../util/headers/RaffleResults';
import Reloader from "../shared/Reloader";
import Spinner from '../shared/Spinner';
import Table from "../shared/Table";


const RafflesList = ({ setSelectedItem, setShowWinners }) => {

    const [response, isLoading, error, fetcher] = useFetch();
    const [pageIndex, setPageIndex] = useState(1);

    const onItemSelected = (value) => {
        setSelectedItem(value);
        setShowWinners(true);
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
                    pageIndex={pageIndex} totalPages={response.pages} columns={getRaffleResults(onItemSelected)} />
                ): (
                    <div className="py-3">
                        <Spinner />
                    </div>
                )
            }
        </>
    )
}

export default RafflesList;