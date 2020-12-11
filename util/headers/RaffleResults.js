
const getRaffleResults = (action) => {

    return [
        { 
            Header: 'Nombre',
            accessor: 'name',
        },
        {
            Header: '# Ganador',
            accessor: 'winningNumber',
            Cell: (e) => {
                return (
                    <>
                        {
                            !e.row.original.isActive ? (
                                <>
                                    {e.row.original.winningNumber}
                                </>
                            ): (
                                <p className="text-gray-600 font-bold">Sin conocer</p>
                            )
                        }
                    </>
                )
            }
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
            Cell: (e) => {
              return (
                  <>
                    {
                        !e.row.original.isActive ? (

                            <div className="px-3 flex justify-start">
                                <button onClick={() => action(e.row.original.id)} className={`bg-blue-600 text-gray-200 rounded-full
                                cursor-pointer py-1 px-2 hover:bg-blue-700`}>
                                    Aceptar
                                </button>
                            </div>
                        ) : null
                    }
                </>
              )
            }
          }
    ]
}

export default getRaffleResults;