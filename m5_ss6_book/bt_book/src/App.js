import logo from './logo.svg';
import './App.css';
import {BookList} from "./components/book/BookList";
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateBook} from "./components/book/CreateBook";
import {BookDetail} from "./components/book/BookDetail";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <div className="row mx-5 justify-content-center">
            <ToastContainer/>

            <BrowserRouter>
                <Routes>
                    <Route path="/book" element={<BookList/>}></Route>
                    <Route path="/book/create" element={<CreateBook/>}></Route>
                    <Route path={`/book/detail/:bookId`} element={<BookDetail/>}></Route>
                    <Route path={`/book/delete/:bookId`} element={<BookDetail/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
