import { useContext } from 'react';
import { MainContext } from '../../context';
import { useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ children, close }) => {

    const ref = useRef();
    const { setLayer } = useContext(MainContext);

    useEffect(() => {

        const onBodyClick = (event) => {
            if(!ref.current) {
                setLayer(false);
                return;
            }
            
            if(ref.current.contains(event.target)) {
                return;
            }

            close(false);
            setLayer(false);
        }
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    return (
        <div className="w-48 absolute z-20" style={{right: '15px', top: '30px'}} ref={ref}>
            <div className="flex items-end justify-end">
                <div className="transform rotate-180">
                    <IoMdArrowDropdown className=" flex items-end text-4xl p-0 m-0 text-gray-200" />
                </div>
            </div>
            <div className="bg-bg2 rounded-lg border border-solid 
            border-blue-900 w-full ml-4 py-2">
                { children }
            </div>
        </div>
    )
}

export default Dropdown;