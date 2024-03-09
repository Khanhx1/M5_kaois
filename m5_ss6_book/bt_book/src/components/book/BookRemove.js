import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import * as bookService from '../service/bookService'
import {useEffect} from "react";


export function BookRemove({show, deletedBook, closeModal}) {

    const acceptRemoving = async () => {
        try {
            await bookService.removeBook(deletedBook);
            closeModal();
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        console.log(show);
    });

    return(

        <>
            <Modal show={show}>
                <Modal.Header>
                    Remove
                </Modal.Header>
                <Modal.Body>
                    Are you sure to remove this?
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary" onClick={closeModal}>Cancel</Button>
                    <Button className="btn btn-danger" onClick={() => {acceptRemoving()}}>Remove</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}