
const winnersTableHeader = [
    {
        Header: 'Nombres',
        accessor: 'playerFirstName'
    },
    {
        Header: 'Apellidos',
        accessor: 'playerLastName'
    },
    {
        Header: 'Cantidad Invertida',
        accessor: 'bet',
        Cell: ({cell: {value}}) => {

            return(
                <>
                    {`C$ ${value}`}
                </>
            )
        }
    },
    {
        Header: 'Ganancia',
        accessor: 'winAmount',
        Cell: ({cell: {value}}) => {

            return(
                <>
                    {`C$ ${value}`}
                </>
            )
        }
    }
    
];

export default winnersTableHeader;