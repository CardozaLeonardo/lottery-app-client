import OperationIcon from "../../components/form/OperationIcon";

const getRaffleTableHeader = (onDeleteSelected, onUpdateSeleted, runRaffle) => {

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
            Header: 'Opcion',
            accessor: 'id',
            Cell: (e) => {
              return (
                <div className="px-3 flex justify-evenly">
                   {/*<OperationIcon type="view" action={() => {}} /> */}
                   <OperationIcon type="edit" action={() => onUpdateSeleted(e.row.original.id)} />
                   <OperationIcon type="delete" action={() => onDeleteSelected(e.row.original.id)} />
                   {
                      e.row.original.isActive ? (
                        <div className={`px-2 py-1 text-gray-200 bg-green-600 cursor-pointer hover:bg-green-800 
                        rounded-full`} onClick={() => runRaffle(e.row.original.id)}>
                            Correr
                        </div>

                      ) : (
                        <div className={`px-2 py-1 text-gray-700 bg-gray-800 rounded-full`}>
                            Corrido
                        </div>
                      )
                   }
                   
                </div>
              )
            }
          }
    ]
}

export default getRaffleTableHeader;
