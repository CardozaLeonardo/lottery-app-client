import { MainContext } from '../../context';
import { useContext } from 'react';

const Layer = ({ transparent }) => {

    const { layer } = useContext(MainContext);


    return (
        
        layer ? (
            <div className={`absolute inset-0 z-10`} ></div>
        ): null
  
    )
}

export default Layer;