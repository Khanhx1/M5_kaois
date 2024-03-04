import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

import './ContactForm.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function ContactForm(){

    const initValue = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Không được để trống"),
        email: Yup.string().required("Không được để trống").matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/,"email sai định dạng"),
        phone: Yup.string().required("Không được để trống"),
        message: Yup.string().required("Không được để trống")
    })

    const handleSubmit = (values, { setSubmitting }) => {
        // Xử lý logic khi submit form
        console.log('Form submitted:', values);
        toast.success("thành công");
        setSubmitting(false);

    };


    return(
        <>
            <ToastContainer />
            <h2>Contact form</h2>
            <Formik validationSchema={validationSchema} initialValues={initValue} onSubmit={handleSubmit}>
                <Form>
                    Name: <Field name="name" type="text"/><br/>
                    <ErrorMessage name="name" component="span"></ErrorMessage><br/>
                    Email: <Field name="email" type="text"/><br/>
                    <ErrorMessage name="email" component="span"></ErrorMessage><br/>
                    Phone: <Field name="phone" type="text"/><br/>
                    <ErrorMessage name="phone" component="span"></ErrorMessage><br/>
                    Message: <Field name="message" as ="textarea"/><br/>
                    <ErrorMessage name="message" component="span"></ErrorMessage><br/>

                    <button type="submit">Gửi</button>
                </Form>

            </Formik>


        </>

    )
}

export default ContactForm;