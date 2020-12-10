import OperationIcon from "../../components/form/OperationIcon";

const getRaffleTableHeader = (onDeleteSelected, onUpdateSeleted) => {

    return [
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
            Header: 'Activo',
            accessor: 'isActive',
        },
        {
            Header: 'Opcion',
            accessor: 'id',
            Cell: ({cell: {value}}) => {
              return (
                <div className="px-3 flex justify-evenly">
                   <OperationIcon type="view" action={() => {}} />
                   <OperationIcon type="edit" action={() => onUpdateSeleted(value)} />
                   <OperationIcon type="delete" action={() => onDeleteSelected(value)} />
                </div>
              )
            }
          }
    ]
}

export default getRaffleTableHeader;
