import * as Yup from "yup"
import {toast, ToastContainer} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function MedicalForm() {
    const initValues = {
        name: "",
        idCard: "",
        birthday: "",
        gender: null,
        nationality: "",
        workplace: "",
        jobPosition: "",
        insuranceCard: 1,
        province: "",
        district: "",
        commune: "",
        address: "",
        phoneNumber: "",
        email: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Tên không được để trống"),
        idCard: Yup.string().required("CMND/CCCD không được để trống"),
        birthday: Yup.date()
            .required("ngày sinh")
            .min(new Date('1900-01-01T00:00:00'), "Năm sinh phải lớn hơn 1900"),

        nationality: Yup.string().required("quốc tịch không được để trống"),
        province: Yup.string().required("tỉnh thành không được để trống"),
        district: Yup.string().required("quận/huyện không được để trống"),
        commune: Yup.string().required("phường/xã không được để trống"),
        address: Yup.string().required("địa chỉ nhà không được để trống"),
        phoneNumber: Yup.string()
            .required("số điện thoại")
            .matches(/^0[1-9]{9}/, "Số điện thoại không đúng định dạng"),
        email: Yup.string()
            .required("email không được để trống")
            .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/, "Email sai định dạng"),
        gender: Yup.number().required("không để trống giới tính")

    });

    const handleSubmit = (value) => {
        console.log(value);
        toast.success("Thành công");
    }

    return (
        <>
            <ToastContainer />

            <h2>Tờ khai Y tế</h2>
            <Formik
                initialValues={initValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Họ và Tên</label>
                        <Field type="text" className="form-control" name="name" id="name"/>
                        <ErrorMessage name="name" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="idCard" className="form-label">CMND</label>
                        <Field type="text" className="form-control" name="idCard" id="idCard"/>
                        <ErrorMessage name="idCard" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="birthday" className="form-label">Năm sinh</label>
                        <Field type="text" className="form-control" name="birthday" id="birthday"/>
                        <ErrorMessage name="birthday" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giới tính</label>
                        <div className="form-check">
                            <Field type="radio" name="gender" value="1" className="form-check-input" id="male"/>
                            <label className="form-check-label" htmlFor="male">Nam</label>
                        </div>
                        <div className="form-check">
                            <Field type="radio" name="gender" value="0" className="form-check-input" id="female"/>
                            <label className="form-check-label" htmlFor="female">Nữ</label>
                        </div>
                        <ErrorMessage name="gender" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nationality" className="form-label">Quốc Tịch</label>
                        <Field type="text" className="form-control" name="nationality" id="nationality"/>
                        <ErrorMessage name="nationality" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="workplace" className="form-label">Công ty làm việc</label>
                        <Field type="text" className="form-control" name="workplace" id="workplace"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jobPosition" className="form-label">Bộ phận làm việc</label>
                        <Field type="text" className="form-control" name="jobPosition" id="jobPosition"/>
                    </div>
                    <div className="mb-3 form-check">
                        <label className="form-check-label" htmlFor="insuranceCard">
                            Có thẻ bảo hiểm y tế
                        </label>
                        <input className="form-check-input" type="checkbox" value="1" id="insuranceCard"/>
                    </div>

                    <h3>Địa chỉ liên lạc tại Vệt Nam</h3>
                    <div className="mb-3">
                        <label htmlFor="province" className="form-label">Tỉnh thành</label>
                        <Field type="text" className="form-control" name="province" id="province"/>
                        <ErrorMessage name="province" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="district" className="form-label">Quận/Huyện</label>
                        <Field type="text" className="form-control" name="district" id="district"/>
                        <ErrorMessage name="district" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="commune" className="form-label">Phường/Xã</label>
                        <Field type="text" className="form-control" name="commune" id="commune"/>
                        <ErrorMessage name="commune" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Số nhà</label>
                        <Field type="text" className="form-control" name="address" id="address"/>
                        <ErrorMessage name="address" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Điện thoại</label>
                        <Field type="text" className="form-control" name="phoneNumber" id="phoneNumber"/>
                        <ErrorMessage name="phoneNumber" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field type="email" className="form-control" name="email" id="email"/>
                        <ErrorMessage name="email" component="span" className="text-danger"/>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-dark">Lưu</button>
                    </div>
                </Form>
            </Formik>

        </>

    )
}