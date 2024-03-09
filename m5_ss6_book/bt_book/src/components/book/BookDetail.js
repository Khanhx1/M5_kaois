import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as bookService from "../service/bookService"
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function BookDetail() {
    console.log("lan dau")
    const {bookId} = useParams();
    const [book, setBook] = useState();
    const navigation = useNavigate();


    useEffect(() => {
        getBookById();
    }, []);

    const getBookById = async () => {
        try {
            console.log("vao method")
            const bookById = await bookService.getBookById(bookId);
            setBook(bookById);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (value) => {
        await bookService.updateBook(value);
        navigation("/book");
        toast.success("successfully update");

    }

    if (!book) return <div>loader</div>

    return (
        <div className="col-6">
            <h2>Detail</h2>

            <Formik
                initialValues={book}
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