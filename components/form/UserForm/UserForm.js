import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Modal from '../Modal';
import Input from "../Input";
import useFetch from "../../../hooks/useFetch";
import InputGroup from "../InputGroup";
import Button from '../../shared/Button';
import * as Yup from 'yup';
import { MainContext } from '../../../context';
import Spinner from '../../shared/Spinner';
import Select from '../Select';

const emptyInitial = {
    username: '',
    email: '',
    name: '',
    lastname: '',
    roleId: 0,
    password: '',
    passwordConfirmation: ''
};

const roles = [
    {
        id: 1,
        name: 'Admin'
    },

    {
        id: 2,
        name: 'Jugador'
    }
];

const userValidationSchema = Yup.object({

    username: Yup.string()
    .min(5, 'Muy corto')
    .max(40, 'Muy largo')
    .required('Requerido'),

    email: Yup.string()
    .email('Ingrese una dirección correcta')
    .required('Requerido'),

    name: Yup.string()
    .min(5, 'Muy corto')
    .max(60, 'Muy largo')
    .required('Requerido'),

    lastname: Yup.string()
    .min(5, 'Muy corto')
    .max(60, 'Muy largo')
    .required('Requerido'),

    roleId: Yup.string()
    .required('Requerido'),

    password: Yup.string()
    .min(8, 'Muy corto')
    .max(40, 'Muy largo')
    .required('Requerido'),

    passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
})

const UserForm = ({data = emptyInitial, close, updatePassword=false, 
    alertAction, update=false, userId=40}) => {

    const [response, isLoading, error, fetcher] = useFetch();
    const { setLayer } = useContext(MainContext);
    const create = !update ? true : false;

    const onSubmitAction = async (values) => {
        values.roleId = parseInt(values.roleId);
        fetcher.post('/user', values);
        
    }

    const onUpdateSubmit = async (values) => {
        values.roleId = parseInt(values.roleId);
        fetcher.patch('/user', values);
        
    }


    if(response) {
        
        setLayer(false);
        close(false);
        alertAction({
            color: 'success',
            text: 'Usuario creado con éxito'
        })
    }
    
    const { values, errors, handleSubmit, handleChange, touched} = useFormik({
        initialValues: data ,
        validationSchema: userValidationSchema,
        onSubmit: update ? values => onUpdateSubmit(values) : values => onSubmitAction(values)
    })

    



    return (
        <div>
                <div className="px-8 py-4">
                    <h3 className="text-3xl text-gray-200 mb-5">Usuario</h3>

                    <form onSubmit={ handleSubmit }>

                            <InputGroup label="USUARIO">
                                <Input value={values.username} callback={handleChange} name="username"/>
                                { touched.username && errors.username && <p className="text-xs text-red-500">{errors.username}</p> }
                                { error && error == 409 && response && response.field == 'username' && <p className="text-xs text-red-500">
                                    Este usuario ya está tomado
                                    </p>
                                }
                            </InputGroup>

                            <InputGroup label="CORREO">
                                <Input value={values.email} type="email" callback={handleChange} name="email"/>
                                { touched.email && errors.email && <p className="text-xs text-red-500">{errors.email}</p> }
                                { error && error == 409 && response && response.field == 'email' && <p className="text-xs text-red-500">
                                    Este correo ya está registrado
                                    </p>
                                }
                            </InputGroup>

                            <InputGroup label="NOMBRES">
                                <Input value={values.name} callback={handleChange} name="name"/>
                                { touched.name && errors.name && <p className="text-xs text-red-500">{errors.name}</p> }
                            </InputGroup>

                            <InputGroup label="APELLIDOS">
                                <Input value={values.lastname} callback={handleChange} name="lastname"/>
                                { touched.lastname && errors.lastname && <p className="text-xs text-red-500">{errors.lastname}</p> }
                            </InputGroup>

                            <InputGroup label="CONTRASEÑA">
                                <Input value={values.password} type="password" callback={handleChange} name="password"/>
                                { touched.password && errors.password && <p className="text-xs text-red-500">{errors.password}</p> }
                            </InputGroup>

                            <InputGroup label="CONFIRME CONTRASEÑA">
                                <Input value={values.passwordConfirmation} type="password" callback={handleChange} name="passwordConfirmation"/>
                                { touched.passwordConfirmation && errors.passwordConfirmation && <p className="text-xs text-red-500">{errors.passwordConfirmation}</p> }
                            </InputGroup>

                            <InputGroup label="ROL">
                                <Select name="roleId" items={roles} value={values.roleId} callback={handleChange} />
                                { touched.roleId && errors.roleId && <p className="text-xs text-red-500">{errors.roleId}</p> }
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

export default UserForm;