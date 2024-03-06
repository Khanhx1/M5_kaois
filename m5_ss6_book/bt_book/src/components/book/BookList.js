import {useEffect, useState} from "react";
import * as bookService from '../service/bookService'
import {Link} from "react-router-dom";




export function BookList(){
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});

    useEffect( () => {
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


            <Link to="/book/create">Add</Link>
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