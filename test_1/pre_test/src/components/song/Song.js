import {useEffect, useState} from "react";
import * as SongService from "../service/SongService"
import {Link} from "react-router-dom";
import {DeleteSong} from "./DeleteSong";
export function Song() {
    const [songs, setSongs] = useState([]);
    const [show, setShow] = useState(false);
    const [delSong, setDelSong] = useState({});


    useEffect(() => {
        getAllSong();
    }, [show]);

const getAllSong = async () => {
    try {
        const asc = "asc"
        const list = await SongService.getAll(asc);
        setSongs(list);
    } catch (e){
        console.log(e);
    }
}
const handleDelete = (song) => {
    setDelSong(song);
    setShow(true);

}

const closeModal = () => {
    setShow(false);
}


    return(

        <>
            <div className="row mx-5">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <h2>Danh sách bài hát</h2>
                </div>
            </div>

            <div className="row mx-5">
                <div className="col-2">
                    <Link to={"/song/create"} className="btn btn-primary">Thêm mới</Link>

                </div>
            </div>


            <div className="row mx-5">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        songs.map((song, index) => (
                            <tr key={song.id}>
                                <td>{index + 1}</td>
                                <td>{song.name}</td>
                                <td>{song.description}</td>
                                <td>{song.category.name}</td>
                                <td><Link to={`/song/edit/${song.id}`} className="btn btn-warning">Sửa</Link></td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{handleDelete(song)}}>Xóa</button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
            <DeleteSong delSong={delSong} show={show} closeModal={closeModal}/>
        </>
    )
}