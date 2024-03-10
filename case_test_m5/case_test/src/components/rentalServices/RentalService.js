import {useEffect, useState} from "react";
import * as FuramaRentalService from '../service/FuramaRentalService'
import '../statics/css/KCustom.css'
export function RentalService() {
    const [services, setServices] = useState();

    // useEffect(() => {
    //     getAllService();
    // }, []);
    //
    // const getAllService = async () => {
    //     const list = await FuramaRentalService.getAllService();
    //     console.log(list)
    //     setServices(list);
    // }

    if (!services) {return (
        <div>loading...</div>
    )}

    return (
        <>

            <div className="row d-flex justify-content-center mx-5 mt-5 mb-5">
                <h2 className="col-5">Quản lý danh sách dịch vụ cho thuê</h2>
            </div>

            <div className="row d-flex justify-content-center align-items-center mx-5 mt-5 mb-5">
                {
                    services.map((service, index) => (
                        <div key={service.id} className="col-4 d-flex justify-content-center">
                            <div className="card k-cart">
                                <img src="https://www.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{service.nameService}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-body">
                                    <a href={`/service/edit/${service.id}`} className="btn btn-warning mx-1">Sửa</a>
                                    <a href="#" className="btn btn-danger mx-1">Xóa</a>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>

        </>

    )
}