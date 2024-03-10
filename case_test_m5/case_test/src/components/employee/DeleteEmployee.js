import {Modal} from "react-bootstrap";
import * as EmployeeService from '../service/EmployeeService'

export function DeleteEmployee({delEmployee, show, closeModal}) {


    const accept = async () => {
        try {
            await EmployeeService.deleteEmployee(delEmployee);
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
        Bạn có chắc muốn xóa {delEmployee.name}
    </Modal.Body>
    <Modal.Footer>
        <button className="btn btn-danger" onClick={accept}>Xóa</button>
        <button className="btn btn-dark" onClick={closeModal}>Hủy</button>
    </Modal.Footer>


</Modal>

        </>
    )
}