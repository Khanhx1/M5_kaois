import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import * as SongService from "../service/SongService"


export const DeleteSong = ({delSong, show, closeModal}) => {

    const handleSubmit = async () => {
        try {
            await SongService.deleteSong(delSong)
            closeModal();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                    Xóa
                </Modal.Header>
                <Modal.Body>
                    Muốn xóa {delSong.name}?
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-danger" onClick={()=>{handleSubmit()}}>xóa</Button>
                    <Button className="btn btn-danger" onClick={()=>{closeModal()}}>ko</Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}