import { useContext } from 'react';
import { MainContext } from '../../context';

const Modal = ({ children, close }) => {

    const { setLayer } = useContext(MainContext);
    
    return (
        <div className="absolute bg-black bg-opacity-75 z-20 inset-0">
            <div className="flex justify-center items-center" style={{height: '100vh'}}>
                <div className="bg-bg1 rounded">
                    <div className="flex justify-end">
                    <button className={`rounded-full bg-bg3 text-gray-500 text-xs cursor-pointer py-1 px-3
                    -mr-2 -mt-2`} onClick={() => {setLayer(false); close(false);}}>
                        x
                    </button>
                    </div>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Modal;