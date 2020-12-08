import { useFormik } from 'formik';
import { useState } from 'react';
import Input from '../form/Input';
import InputGroup from '../form/InputGroup';
import Button from '../shared/Button';
import Number from './Number';

const Ticket = ({ addTicket, close, ticketList}) => {

    const [selectedNumber, setSelectedNumber] = useState('-1');
    const [ticket, setTicket] = useState(null);

    const { values, errors, handleSubmit, handleChange, touched} = useFormik({
        initialValues: {amount: ''},
        onSubmit: (values) => {
            var newItem = {
                number: selectedNumber,
                amount: values.amount
            }
            
            addTicket(p => [...p, newItem]);
            close(false);
        }        
    })

    

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
        <div className="rounded flex">

            <div className="p-4 w-64 bg-bg2">
                <p className="text-gray-200 text-opacity-75 mb-3">Seleccione el número</p>

                <div className="flex" >
                    {
                    createList().map((item) => {

                        return (
                            <div className="w-1/6 justify-center">
                                {item.map((num, i) => {
                                    return (
                                        <Number list={ticketList} key={`ticket_num_${i}`} action={setSelectedNumber} 
                                        selected={selectedNumber} number={num} />
                                    )
                                })}
                            </div>
                        )
                        
                    })
                    }
                </div>

            </div>

            <div className="p-4 w-64 bg-bg2">
                <form onSubmit={ handleSubmit }>
                   <InputGroup label="CANTIDAD DE JUEGO (C$)">
                       <Input value={values.amount} callback={ handleChange }  name="amount" />
                   </InputGroup>

                   <Button  type="submit" variant="primary medium">
                      HECHO
                   </Button>
                   
                </form>
            </div>
        </div>
    )
}

export default Ticket;