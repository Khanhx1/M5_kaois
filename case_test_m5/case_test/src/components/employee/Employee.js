import {useEffect, useState} from "react";
import * as EmployeeService from "../service/EmployeeService"
import moment from "moment";
import {DeleteEmployee} from "./DeleteEmployee";

export function Employee() {
    const [employees, setEmployees] = useState([])
    const [show, setShow] = useState(false);
    const [delEmployee, setDelEmployee] = useState({});

    useEffect(() => {
        getAllEmployee();
    }, [show]);

    const getAllEmployee = async () => {
        try {
            const list = await EmployeeService.getAll();
            setEmployees(list);
        } catch (e) {
            console.log(e);
        }
    }

    function formatMoney(amount) {
        // Chuyển số sang chuỗi và tách phần nguyên và phần thập phân
        let parts = amount.toString().split(".");
        let integerPart = parts[0];
        let decimalPart = parts.length > 1 ? "." + parts[1] : "";

        // Định dạng phần nguyên
        let formattedInteger = "";
        for (let i = integerPart.length - 1, j = 0; i >= 0; i--, j++) {
            formattedInteger = integerPart.charAt(i) + formattedInteger;
            if ((j + 1) % 3 === 0 && i !== 0) {
                formattedInteger = "." + formattedInteger;
            }
        }

        // Kết hợp phần nguyên và phần thập phân để tạo số tiền đầy đủ
        let formattedAmount = formattedInteger + decimalPart;

        return formattedAmount;
    }

    const convertDate = (date) => {
         return moment(date).format('DD/MM/YYYY');
    }

    const handleDelete = (book) => {
        setShow(true);
        setDelEmployee(book);
    }

    const closeModal = () => {
        setShow(false);
    }

    if (!employees) {
        return (<div>loading</div>)
    }

    return (
        <>

            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Quản lý nhân viên</h2>
            </div>
            <div className="row mx-5">
                <div className="col-2">
                    <a href="/employee/create" className="btn btn-primary">Thêm mới</a>

                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mx-5 mt-5 mb-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">CCCD</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trình độ</th>
                        <th scope="col">Vị trí</th>
                        <th scope="col">Lương (vnđ)</th>
                        <th>Chức năng</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map((employee, index) => (
                            <tr key={employee.id}>
                                <td>{index + 1}</td>
                                <td>{employee.name}</td>
                                <td>{convertDate(employee.dateOfBirth)}</td>
                                <td>{employee.identification}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.email}</td>
                                <td>{employee.education}</td>
                                <td>{employee.position}</td>
                                <td>{formatMoney(employee.salary)}</td>
                                <td><a href={`/employee/edit/${employee.id}`} className="btn btn-warning">Sửa</a></td>
                                <td><button className="btn btn-danger" onClick={() => {handleDelete(employee);}}>Xóa</button></td>
                            </tr>
                        ))

                    }
                    </tbody>
                </table>
            </div>
            <DeleteEmployee delEmployee = {delEmployee} show={show} closeModal={closeModal}/>

        </>
    )
}