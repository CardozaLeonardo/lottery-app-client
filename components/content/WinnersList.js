import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Reloader from "../shared/Reloader";
import Spinner from '../shared/Spinner';
import Table from "../shared/Table";
import winnersTableHeader from '../../util/headers/WinnersTable';

const WinnersList = ({ selectedItem }) => {

    const [response, isLoading, error, fetcher] = useFetch();
    const [pageIndex, setPageIndex] = useState(1);

    useEffect(() => {
       
        if(!error) {
            
           fetcher.getList(`/raffle/get-raffle-winners/${selectedItem}`);
        }
 
     }, [pageIndex])

    return (
        <div className="my-3">
            { error && !isLoading && <Reloader callback={fetcher.getList(`/raffle/get-raffle-winners/${selectedItem}`)} /> }
                    
            {
                response && !isLoading && !error ? (
                    <Table data={response.raffleResults} onSelectedItem={setPageIndex} 
                    pageIndex={pageIndex} totalPages={1} columns={winnersTableHeader} />
                ): (
                    <div className="py-3">
                        <Spinner />
                    </div>
                )
            }
        </div>
    )
}

export default WinnersList;