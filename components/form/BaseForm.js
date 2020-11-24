import { useFormik } from "formik";

const BaseForm = ({validation={}, submit, fields}) => {

    const formik = useFormik({
        initialValues: fields,
        onSubmit: submit, 
        validationSchema: validation  
    });

    return (
        <form className="w-full" onSubmit={formik.handleSubmit}>
            {children}
        </form>
    )
}

export default BaseForm;