
const getRaffleResults = (action) => {

    return [
        { 
            Header: 'Nombre',
            accessor: 'name',
        },
        {
            Header: 'Inicio',
            accessor: 'startDate',
        },
        {
            Header: 'Final',
            accessor: 'endDate',
        },
        /*{
            Header: 'No Ganador',
            accessor: 'winner_number',
        },*/
        {
            Header: 'Estado',
            accessor: 'isActive',
            Cell: ({cell: {value}}) => {

                return(
                    <>
                        {
                            value ? (
                                <p className="text-orange-600 font-bold">Sin correr</p>
                            ) : (
                                <p className="text-green-600 font-bold">Finalizado</p>
                            )
                        }
                    </>
                )
            }
        },
        {
            Header: 'Seleccionar',
            accessor: 'id',
            Cell: ({cell: {value}}) => {
              return (
                <div className="px-3 flex justify-center">
                   <button onClick={() => action(value)} className={`bg-active text-gray-200 rounded-full
                   cursor-pointer py-1 px-2 hover:bg-orange-700`}>
                       Aceptar
                   </button>
                </div>
              )
            }
          }
    ]
}

export default getRaffleResults;