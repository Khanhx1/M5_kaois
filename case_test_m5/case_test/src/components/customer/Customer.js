import {useEffect, useState} from "react";
import moment from "moment";
import * as CustomerService from '../service/CustomerService'
import {CustomerDelete} from "./CustomerDelete";

export function Customer() {
    const [customers, setCustomers] = useState([])
    const [show, setShow] = useState(false);
    const [delCustomer, setDelCustomer] = useState({});

    useEffect(() => {
        getAllCustomer();
    }, [show]);

    const getAllCustomer = async () => {
        try {
            const list = await CustomerService.getAll();
            setCustomers(list);
        } catch (e) {
            console.log(e);
        }
    }

    const convertDate = (date) => {
        return moment(date).format('DD/MM/YYYY');
    }

    const handleDelete = (customer) => {
        setShow(true);
        setDelCustomer(customer);
    }

    const closeModal = () => {
        setShow(false);
    }

    if (!customers) {
        return (<div>loading</div>)
    }

    return (

        <>
            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Quản lý Khách hàng</h2>
            </div>
            <div className="row mx-5">
                <div className="col-2">
                    <a href="/customer/create" className="btn btn-primary">Thêm mới</a>

                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mx-5 mt-5 mb-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">CCCD</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Email</th>
                        <th scope="col">Loại</th>
                        <th scope="col">Địa chỉ</th>
                        <th>Chức năng</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customers.map((customer, index) => (
                            <tr key={customer.id}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{convertDate(customer.dateOfBirth)}</td>
                                <td>{customer.gender}</td>
                                <td>{customer.identification}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.email}</td>
                                <td>{customer.level}</td>
                                <td>{customer.address}</td>
                                <td><a href={`/customer/edit/${customer.id}`} className="btn btn-warning">Sửa</a></td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => {
                                        handleDelete(customer);
                                    }}>Xóa
                                    </button>
                                </td>
                            </tr>
                        ))

                    }


                    </tbody>
                </table>
            </div>
            <CustomerDelete delCustomer={delCustomer} show={show} closeModal={closeModal}/>

        </>
    )
}