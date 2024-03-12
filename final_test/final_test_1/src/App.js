import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Book} from "./components/book/Book";
import {BookCreate} from "./components/book/BookCreate";
function App() {
  return (

      <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/book"} element={<Book/>}></Route>
                  <Route path={"/book/create"} element={<BookCreate/>}></Route>
              </Routes>
          </BrowserRouter>
          <ToastContainer/>
      </>
  );
}

export default App;
