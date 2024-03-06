import logo from './logo.svg';
import './App.css';
import {BookList} from "./components/book/BookList";
import "bootstrap/dist/css/bootstrap.css"
import {Route} from "react-router-dom";
import {CreateBook} from "./components/book/CreateBook";
function App() {
  return (
   <>

       <Route path="/book" element={<BookList/>}></Route>
       <Route path="/book/create" element={<CreateBook/>}></Route>

   </>
  );
}

export default App;
