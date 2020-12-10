import { IoIosAddCircle, IoIosTrash, IoIosCreate, IoIosEye } from 'react-icons/io';

const OperationIcon = ({type, action}) => {

    return (
        <div onClick={action} className="text-2xl text-blue-600 cursor-pointer hover:text-active">
            { type == 'view' && <IoIosEye  /> }
            { type == 'create' && <IoIosAddCircle  /> }
            { type == 'edit' && <IoIosCreate  /> }
            { type == 'delete' && <IoIosTrash  /> }
        </div>
    )
}

export default OperationIcon;