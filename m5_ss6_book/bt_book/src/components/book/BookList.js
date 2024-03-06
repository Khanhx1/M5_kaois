import {useEffect, useState} from "react";
import * as bookService from '../service/bookService'
import {Link} from "react-router-dom";


export function BookList() {
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = async () => {
        try {
            const bookList = await bookService.getAllBook();
            setBooks(prevState => bookList);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>

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
                            <td>aa</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        </>
    )
}