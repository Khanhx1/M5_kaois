import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as EmployeeService from "../service/EmployeeService"
import {Field, Form, Formik} from "formik";
import {toast, useToast} from "react-toastify";

export function EditEmployee() {
    const [employee, setEmployee] = useState();
    const {id} = useParams();
    useEffect(() => {
        getEmployeeById();
    }, []);

    const navigation = useNavigate();

    const getEmployeeById = async () => {
        try {
            const employee = await EmployeeService.getById(id);
            setEmployee(employee);
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = (value) => {
        EmployeeService.updateEmployee(value);
        console.log(value);
        navigation("/employee")
        toast.success("Cập nhật thành công");
    }

    if (!employee) {return (<div>loading</div>)}

    return (
        <>
            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Chỉnh sửa thông tin nhân viên</h2>
            </div>


            <div className="d-flex justify-content-center row mb-5">
                <div className="col-5">
                    <Formik initialValues={employee} onSubmit={handleSubmit}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="kk1" className="form-label">Tên nhân viên</label>
                                <Field name="name" type="text" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk2" className="form-label">Ngày sinh</label>
                                <Field name="dateOfBirth" type="date" className="form-control" id="kk2"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk3" className="form-label">CCCD</label>
                                <Field name="identification" type="text" className="form-control" id="kk3"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk4" className="form-label">Số điện thoại</label>
                                <Field name="phoneNumber" type="text" className="form-control" id="kk4"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk5" className="form-label">Email</label>
                                <Field name="email" type="text" className="form-control" id="kk5"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk6" className="form-label">Trình độ</label>
                                <Field name="education" as="select" className="form-control" id="kk6">
                                    {/*<option value="" disabled selected>Chọn trình độ</option>*/}
                                    <option value="Trung cấp">Trung cấp</option>
                                    <option value="Cao đẳng">Cao đẳng</option>
                                    <option value="Đại học">Đại học</option>
                                    <option value="Sau đại học">Sau đại học</option>
                                </Field>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="kk7" className="form-label">Vị trí</label>
                                <Field name="position" as="select" className="form-control" id="kk7">
                                    {/*<option value="" disabled selected>Chọn vị trí</option>*/}
                                    <option value="Lễ tân">Lễ tân</option>
                                    <option value="Phục vụ">Phục vụ</option>
                                    <option value="Chuyên viên">Chuyên viên</option>
                                    <option value="Giám sát">Giám sát</option>
                                    <option value="Quản lý">Quản lý</option>
                                    <option value="Giám đốc">Giám đốc</option>
                                </Field>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk8" className="form-label">Lương</label>
                                <Field name="salary" type="number" className="form-control" id="kk8"/>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-success" type="submit">Cập nhật</button>
                                <a href="/employee" className="btn btn-dark" type="submit">Hủy</a>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>


        </>
    )
}