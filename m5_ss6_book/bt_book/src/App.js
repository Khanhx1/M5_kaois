import logo from './logo.svg';
import './App.css';
import {BookList} from "./components/book/BookList";
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateBook} from "./components/book/CreateBook";

function App() {
    return (
        <div className="mx-3">
            <BrowserRouter>
                <Routes>
                    <Route path="/book" element={<BookList/>}></Route>
                    <Route path="/book/create" element={<CreateBook/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
