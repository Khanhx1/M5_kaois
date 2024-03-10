import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as EmployeeService from "../service/EmployeeService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, useToast} from "react-toastify";
import * as Yup from "yup";

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

    const validation = {
        name: Yup.string().matches(/^([A-Z]{1}[a-z]+)(\s([A-Z]{1}[a-z]+))+$/, "Tên không đúng định dạng").required("Vui lòng nhập tên"),
        dateOfBirth: Yup.date().min(new Date('1900-01-01'), "Ngày sinh phải trên 1900").max(new Date('2006/01/01'), "Phải đủ 18 tuổi").required("Vui lòng nhập ngày sinh"),
        identification: Yup.string().required("Vui lòng nhập CCCD").matches(/^[0-9]{12}$/, "CCCD phải đủ 12 số"),
        phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại").matches(/^0[1-9]{9}$/,"Số điện thoại không hợp lệ"),
        email: Yup.string().required("vui lòng nhập email").email("Email không hợp lệ"),
        education: Yup.string().required("vui lòng nhập trình độ"),
        position: Yup.string().required("vui lòng nhập vị trí"),
        salary: Yup.number().required("Vui lòng nhập lương").min(0, "Tiền lương phải lớn hơn 0")
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
                    <Formik initialValues={employee} onSubmit={handleSubmit} validationSchema={Yup.object(validation)}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="kk1" className="form-label">Tên nhân viên</label>
                                <Field name="name" type="text" className="form-control"/>
                                <ErrorMessage name="name" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk2" className="form-label">Ngày sinh</label>
                                <Field name="dateOfBirth" type="date" className="form-control" id="kk2"/>
                                <ErrorMessage name="dateOfBirth" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk3" className="form-label">CCCD</label>
                                <Field name="identification" type="text" className="form-control" id="kk3"/>
                                <ErrorMessage name="identification" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk4" className="form-label">Số điện thoại</label>
                                <Field name="phoneNumber" type="text" className="form-control" id="kk4"/>
                                <ErrorMessage name="phoneNumber" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk5" className="form-label">Email</label>
                                <Field name="email" type="text" className="form-control" id="kk5"/>
                                <ErrorMessage name="email" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk6" className="form-label">Trình độ</label>
                                <Field name="education" as="select" className="form-control" id="kk6">
                                    <option value="" disabled selected>Chọn trình độ</option>
                                    <option value="Trung cấp">Trung cấp</option>
                                    <option value="Cao đẳng">Cao đẳng</option>
                                    <option value="Đại học">Đại học</option>
                                    <option value="Sau đại học">Sau đại học</option>
                                </Field>
                                <ErrorMessage name="education" component="span" className="k-span"></ErrorMessage>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="kk7" className="form-label">Vị trí</label>
                                <Field name="position" as="select" className="form-control" id="kk7">
                                    <option value="" disabled selected>Chọn vị trí</option>
                                    <option value="Lễ tân">Lễ tân</option>
                                    <option value="Phục vụ">Phục vụ</option>
                                    <option value="Chuyên viên">Chuyên viên</option>
                                    <option value="Giám sát">Giám sát</option>
                                    <option value="Quản lý">Quản lý</option>
                                    <option value="Giám đốc">Giám đốc</option>
                                </Field>
                                <ErrorMessage name="position" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk8" className="form-label">Lương</label>
                                <Field name="salary" type="number" className="form-control" id="kk8"/>
                                <ErrorMessage name="salary" component="span" className="k-span"></ErrorMessage>
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