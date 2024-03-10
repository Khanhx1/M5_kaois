import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import * as CustomerService from '../service/CustomerService'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

export function CustomerCreate() {


    const navigation = useNavigate();

    const validation = {
        name: Yup.string().matches(/^([A-Z]{1}[a-z]+)(\s([A-Z]{1}[a-z]+))+$/, "Tên không đúng định dạng").required("Vui lòng nhập tên"),
        dateOfBirth: Yup.date().min(new Date('1900-01-01'), "Ngày sinh phải trên 1900").required("Vui lòng nhập ngày sinh"),
        gender: Yup.string().required("Vui lòng chọn giới tính"),
        identification: Yup.string().required("Vui lòng nhập CCCD").matches(/^[0-9]{12}$/, "CCCD phải đủ 12 số"),
        phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại").matches(/^0[1-9]{9}$/,"Số điện thoại không hợp lệ"),
        email: Yup.string().required("vui lòng nhập email").email("Email không hợp lệ"),
        level: Yup.string().required("vui lòng chọn loại khách"),
        address: Yup.string().required("Vui lòng nhập địa chỉ")
    }



    const handleSubmit = async (value) => {
        try {
            await CustomerService.createCustomer(value);
            console.log(value);
            navigation("/customer")
            toast.success("Thêm mới thành công");
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Tạo mới khách hàng</h2>
            </div>


            <div className="d-flex justify-content-center row mb-5">
                <div className="col-5">
                    <Formik initialValues={{
                        "name": "",
                        "dateOfBirth": "",
                        "gender": "",
                        "identification": "",
                        "phoneNumber": "",
                        "email": "",
                        "level": "",
                        "address": ""
                    }} onSubmit={handleSubmit} validationSchema={Yup.object(validation)}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="kk1" className="form-label">Tên khách hàng</label>
                                <Field name="name" type="text" className="form-control"/>
                                <ErrorMessage name="name" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk2" className="form-label">Ngày sinh</label>
                                <Field name="dateOfBirth" type="date" className="form-control" id="kk2"/>
                                <ErrorMessage name="dateOfBirth" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk99" className="form-label">Giới tính</label>
                                <Field name="gender" as="select" className="form-control" id="kk99">
                                    <option value="" disabled selected>Chọn giới tính</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </Field>
                                <ErrorMessage name="gender" component="span" className="k-span"></ErrorMessage>
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
                                <label htmlFor="kk6" className="form-label">Loại khách hàng</label>
                                <Field name="level" as="select" className="form-control" id="kk6">
                                    <option value="" disabled selected>Chọn loại khách hàng</option>
                                    <option value="Diamond">Diamond</option>
                                    <option value="Platinium">Platinium</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Member">Member</option>
                                </Field>
                                <ErrorMessage name="level" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk8" className="form-label">Địa chỉ</label>
                                <Field name="address" type="text" className="form-control" id="kk8"/>
                                <ErrorMessage name="address" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-success" type="submit">Thêm mới</button>
                                <a href="/customer" className="btn btn-dark" type="submit">Hủy</a>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>


        </>
    )


}