import { useFormik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import { MainContext } from '../../../context';
import useFetch from '../../../hooks/useFetch';
import Button from '../../shared/Button';
import Input from '../Input';
import InputGroup from '../InputGroup';

const emptyInitial = {
    isActive: true,
    name: '',
    winMultiplier: 5,
    maxBets: 5,
    startDate: '',
    endDate: '',
}

const raffleValidationSchema = Yup.object({
    name: Yup.string()
    .required('Requerido')
    .max(30, 'Muy largo')
    .min(5, 'MuyCorto'),

    startDate: Yup.date()
    .required('Requerido'),

    endDate: Yup.date()
    .required('Requerido')
})

const RaffleForm = ({data = emptyInitial, close, update=false, itemId, alertAction}) => {
    const [response, isLoading, error, fetcher] = useFetch();
    const { setLayer } = useContext(MainContext);

    const onSubmitAction = (values) => {
        fetcher.post('/raffle', values);
    }

    const onUpdateSubmit = (values) => {
        fetcher.put(`/raffle/${itemId}`, values);
    }

    if(response && !error) {
        
        setLayer(false);
        close(false);
        alertAction({
            color: 'success',
            text: 'Sorteo creado con éxito'
        });
    }

    const { values, errors, handleSubmit, handleChange, touched} = useFormik({
        initialValues: data ,
        validationSchema: raffleValidationSchema,
        onSubmit: update ? values => onUpdateSubmit(values) : values => onSubmitAction(values)
    })


    return (
        <div>
            <div className="px-8 py-4">
                <h3 className="text-3xl text-gray-200 mb-5">Sorteos</h3>
                <form onSubmit={ handleSubmit }>
                    <InputGroup label="NOMBRE">
                        <Input value={values.name} callback={handleChange} name="name"/>
                        { touched.name && errors.name && <p className="text-xs text-red-500">{errors.name}</p> }
                    </InputGroup>

                    <InputGroup label="FECHA INICIO">
                        <Input type="date" value={values.startDate} callback={handleChange} name="startDate"/>
                        { touched.startDate && errors.startDate && <p className="text-xs text-red-500">{errors.startDate}</p> }
                    </InputGroup>

                    <InputGroup label="FECHA FIN">
                        <Input type="date" value={values.endDate} callback={handleChange} name="endDate"/>
                        { touched.endDate && errors.endDate && <p className="text-xs text-red-500">{errors.endDate}</p> }
                    </InputGroup>

                    {
                        isLoading && <Spinner />
                    }

                    <div className="flex justify-between pt-4">
                        <Button type="submit" variant="primary medium">
                            GUARDAR
                        </Button>

                        <Button type="reset" variant="default medium">
                            Cancelar
                        </Button> 
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RaffleForm;