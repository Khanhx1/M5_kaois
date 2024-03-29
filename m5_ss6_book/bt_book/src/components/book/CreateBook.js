import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as bookService from "../service/bookService"
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export function CreateBook() {


    const [book, setBook] = useState();
    const initalValue = {
        title: "",
        quantity: ""
    }
    const navigation = useNavigate();

    const handleSubmit = async (value) => {
        await bookService.saveBook(value);
        navigation("/book");
        toast.success("successfully add");
    }

    return(

        <div className="col-6">
            <h2>create</h2>
            <Formik
                initialValues={initalValue}
                onSubmit={handleSubmit}>
                <Form>

                    <div className="mb-3">
                        <label htmlFor="kk1" className="form-label">Title</label>
                        <Field name="title" type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="kk2" className="form-label">Quantity</label>
                        <Field name="quantity" type="number" min="0" className="form-control" id="kk2"/>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Update</button>
                    </div>


                </Form>
            </Formik>
        </div>
    )
}