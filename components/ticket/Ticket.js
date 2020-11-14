import { useState } from 'react';
import Number from './Number';

const Ticket = () => {

    const [selectedNumber, setSelectedNumber] = useState('-1');

    const createList = () => {

        var list = [];
        var tempList = [];
        var counter = 0;

        for (let index = 0; index < 6; index++) {
            
            counter = index;

            while(counter < 100) {

                if(counter < 10) {
                    tempList.push(`0${counter}`);
                } else {
                    tempList.push(`${counter}`);
                }

                counter += 6;
            }

            list.push(tempList);
            tempList = [];
        }

        return list;
    }
    
    return(
        <div className="rounded bg-bg2 p-4 w-64">
            <p className="text-gray-200 text-opacity-75">Seleccione el número</p>

            <div className="flex" >
                {
                   createList().map((item) => {

                    return (
                        <div className="w-1/6 justify-center">
                            {item.map((num) => {
                                return (
                                    <Number action={setSelectedNumber} selected={selectedNumber} number={num} />
                                )
                            })}
                        </div>
                    )
                       
                   })
                }
            </div>

        </div>
    )
}

export default Ticket;