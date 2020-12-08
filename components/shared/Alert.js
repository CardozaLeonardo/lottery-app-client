import { IoIosClose } from 'react-icons/io';
import cx from 'classnames';

const Alert = ({ children, color='success', close }) => {

    console.log(`Color: ${color}`);
    return (
        <div className={ cx('flex justify-between items-center px-2 py-2 rounded text-sm', {
            'bg-red-300 text-red-700': color == 'danger',
            'bg-green-300 text-green-700': color == 'success',
            'bg-orange-300 text-orange-600': color == 'warning',
            'bg-blue-300 text-blue-700' : color == 'info'
        }) } >
            { children }
            <IoIosClose onClick={() => close(null)}
            className="text-2xl cursor-pointer font-bold"
             />
        </div>
    )
}

export default Alert;