import { useContext } from 'react';
import { MainContext } from '../../context';
import { useRef, useEffect } from "react";

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
        <div className="w-48 absolute z-20" style={{right: '13px', top: '45px'}} ref={ref}>
            <div className="flex items-end justify-end">
                <div className="transform rotate-180">
                    
                    <div className="transform rotate-180" style={{width: '0', height:'0', borderLeft: '10px solid transparent',
                   borderRight: '10px solid transparent', borderBottom: '10px solid #393857'}}></div>
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