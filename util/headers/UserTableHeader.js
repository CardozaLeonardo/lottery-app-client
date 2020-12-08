import Button from "../../components/shared/Button";



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
          <div className="px-3 flex justify-between">
             <Button action={() => onDeleteSelected(value)} variant="primary medium"> ELIMINAR </Button>
             <Button action={() => onUpdateSeleted(value)} variant="primary medium"> ACTUALIZAR </Button>
          </div>
        )
      }
    }
   
];
}

export default getUserTableHeader;