import * as CustomerService from "../service/CustomerService";
import {Modal} from "react-bootstrap";
export function CustomerDelete({delCustomer, show, closeModal}) {
    const accept = async () => {
        try {
            await CustomerService.deleteCustomer(delCustomer);
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
                    Bạn có chắc muốn xóa {delCustomer.name}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={accept}>Xóa</button>
                    <button className="btn btn-dark" onClick={() => {closeModal();}}>Hủy</button>
                </Modal.Footer>


            </Modal>

        </>
    )
}