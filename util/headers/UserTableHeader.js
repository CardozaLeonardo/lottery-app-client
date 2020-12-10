import OperationIcon from "../../components/form/OperationIcon";

const getUserTableHeader = (onDeleteSelected, onUpdateSeleted) => {
   return [
    {
      Header: 'Nombres',
      accessor: 'name',
    },
    {
      Header: 'Apellidos',
      accessor: 'lastname',
    },
    {
      Header: 'Username',
      accessor: 'username',
    },
    {
      Header: 'Email',
      accessor: 'email',
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
   
];
}

export default getUserTableHeader;