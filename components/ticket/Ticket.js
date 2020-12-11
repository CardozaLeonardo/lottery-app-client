import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import Input from '../form/Input';
import InputGroup from '../form/InputGroup';
import Button from '../shared/Button';
import Number from './Number';
import * as Yup from 'yup';
import { MainContext } from '../../context';
import useFetch from '../../hooks/useFetch';
import Spinner from '../shared/Spinner';

const ticketValidationSchema = Yup.object({
    bet: Yup.string()
    .required('Ingrese la cantidad')
    .matches(/^\d+$/, 'Este campo sólo admite números')
})

const Ticket = ({ addTicket, close, ticketList, raffleId, setStoreEvent}) => {

    const [selectedNumber, setSelectedNumber] = useState('-1');
    const [ticket, setTicket] = useState(null);
    const [selection, setSelection] = useState(false);
    const [response, isLoading, error, fetcher] = useFetch();

    const { user } = useContext(MainContext);

    const onSaveTicket = (values) => {
        fetcher.post('/raffle/add-bet', values);
    }

    //action

    if(response && !error) {
        setStoreEvent(true);
        close(false);
    }

    const { values, errors, handleSubmit, handleChange, touched} = useFormik({
        initialValues: {bet: ''},
        validationSchema: ticketValidationSchema,
        onSubmit: (values) => {
            if(selectedNumber == '-1'){
                setSelection(true);
                return;
            }
            
            var newItem = {
                betNumber: parseInt(selectedNumber),
                bet: parseInt(values.bet),
                playerId: user.player.id,
                raffleId: raffleId
            }

            onSaveTicket(newItem);
            
            /*addTicket(p => [...p, newItem]);
            close(false); */
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

                { selectedNumber == '-1' && selection &&  <p className="text-xs text-red-500 mb-2">Debe seleccionar un número</p>}

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
                       <Input type="number" value={values.bet} callback={ handleChange }  name="bet" />
                       { touched.bet && errors.bet && <p className="text-xs text-red-500">{errors.bet}</p> }
                   </InputGroup>

                   <Button  type="submit" variant="primary medium">
                      HECHO
                   </Button>
                   
                </form>
                {
                    isLoading ? (
                        <div className="flex justify-center">
                            <Spinner />
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Ticket;