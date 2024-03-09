import {useEffect, useState} from "react";
import * as bookService from '../service/bookService'
import {Link} from "react-router-dom";
import {BookRemove} from "./BookRemove";


export function BookList() {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});
    const [deletedBook, setDeletedBook] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        getAllBooks();
    }, [show]);

    const getAllBooks = async () => {
        try {
            const bookList = await bookService.getAllBook();
            setBooks(prevState => bookList);
        } catch (err) {
            console.log(err);
        }
    }

    const openModal = (book) => {
        setDeletedBook(book);
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
    }

    return (
        <>
            <div className="d-flex justify-content-center">
               <h2>Book list</h2>
            </div>
            <div className="d-flex justify-content-end">
                <Link to="/book/create" className="btn btn-success my-3">Add a new book</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td><a href={`/book/detail/${book.id}`} className="btn btn-warning">Edit</a></td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {openModal(book);}}>Remove</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <BookRemove deletedBook = {deletedBook} show = {show} closeModal = {closeModal} />
        </>
    )
}