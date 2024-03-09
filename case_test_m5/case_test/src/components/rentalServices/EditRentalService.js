import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as furamaRentalService from "../service/FuramaRentalService"
import {Field, Form, Formik} from "formik";

export function EditRentalService() {
    const [service, setService] = useState();
    const {id} = useParams();

    useEffect(() => {
        getServiceById();
    }, []);

    const getServiceById = async () => {
        try {
            const service = await furamaRentalService.getServiceById(id);
            setService(service);
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = (value) => {
        console.log(value);
    }

    if (!service) {
        return <div>Loading</div>
    }

    if (service.nameService === "Villa") {
        return (
            <>

                <div className="d-flex justify-content-center row ">
                    <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Chỉnh sửa dịch vụ</h2>
                </div>


                <div className="d-flex justify-content-center row mb-5">
                    <div className="col-5">
                        <Formik initialValues={service} onSubmit={handleSubmit}>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="kk1" className="form-label">Tên dịch vụ</label>
                                    <Field name="nameService" type="text" className="form-control"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="kk2" className="form-label">Diện tích</label>
                                    <Field name="area" type="number" min="0" className="form-control" id="kk2"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="kk3" className="form-label">Chi phí thuê</label>
                                    <Field name="cost" type="number" min="0" className="form-control" id="kk3"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="kk4" className="form-label">Số nguười tối đa</label>
                                    <Field name="capacity" type="number" min="0" className="form-control" id="kk4"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="kk5" className="form-label">Thuê theo</label>
                                    <Field name="type" type="text" className="form-control" id="kk5"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="kk6" className="form-label">Tiêu chuẩn phòng</label>
                                    <Field name="standard" type="text" className="form-control" id="kk6"/>
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="kk7" className="form-label">Tiện nghi khác</label>
                                    <Field name="convenient" type="text" className="form-control" id="kk7"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="kk8" className="form-label">Diện tích hồ bơi</label>
                                    <Field name="areaOfPool" type="number" className="form-control" id="kk8"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="kk9" className="form-label">Số tầng</label>
                                    <Field name="numberOfFloor" type="number" className="form-control" id="kk9"/>
                                </div>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" type="submit">Cập nhật</button>
                                    <button className="btn btn-dark" type="submit">Hủy</button>
                                </div>

                            </Form>
                        </Formik>
                    </div>
                </div>
            </>
        )
    }
}