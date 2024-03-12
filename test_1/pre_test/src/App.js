import logo from './logo.svg';
import './App.css';
import {Song} from "./components/song/Song";
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateSong} from "./components/song/CreateSong";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {EditSong} from "./components/song/EditSong";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/song"} element={<Song/>}></Route>
                    <Route path={"/song/create"} element={<CreateSong/>}></Route>
                    <Route path={"/song/edit/:id"} element={<EditSong/>}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>

        </>
    );
}

export default App;
