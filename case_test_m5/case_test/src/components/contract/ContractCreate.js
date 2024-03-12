import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as ContractService from '../service/ContractService'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
export function ContractCreate() {

const navigation = useNavigate();

    const validation = {
        contractCode : Yup.string().required("Vui lòng nhập số hợp đồng").matches(/^HD[0-9]{3}$/, "Số hợp đồng phải đúng định dạng HD001"),
        service: Yup.string().required("Vui lòng chọn loại hình cho thuê"),
        beginDate: Yup.date().required("Vui lòng nhập ngày bắt đầu"),
        endDate: Yup.date().required("Vui lòng nhập ngày Kết thúc"),
        deposit: Yup.number().min(0, "Số tiền cọc phải lớn hơn 0").required("Vui lòng nhập số tiền cọc"),
        totalAmount: Yup.number().min(0, "Số tiền thanh toán phải lớn hơn 0").required("Vui lòng nhập số tiền thanh toán")
    }

    const handleSubmit = async (value) => {
        try {
            await ContractService.createContract(value);
            navigation("/contract");
            toast.success("Tạo hợp đồng thành công");
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <>
            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Tạo mới hợp đồng</h2>
            </div>


            <div className="d-flex justify-content-center row mb-5">
                <div className="col-5">
                    <Formik initialValues={{
                        "contractCode": "",
                        "service": "",
                        "beginDate": "",
                        "endDate": "",
                        "deposit": "",
                        "totalAmount": ""
                    }} onSubmit={handleSubmit} validationSchema={Yup.object(validation)}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="kk1" className="form-label">Số hợp đồng</label>
                                <Field name="contractCode" type="text" className="form-control"/>
                                <ErrorMessage name="contractCode" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk6" className="form-label">Dịch vụ cho thuê</label>
                                <Field name="service" as="select" className="form-control" id="kk6">
                                    <option value="" disabled selected>Chọn loại dịch vụ</option>
                                    <option value="Villa">Villa</option>
                                    <option value="House">House</option>
                                </Field>
                                <ErrorMessage name="service" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk2" className="form-label">Ngày bắt đầu</label>
                                <Field name="beginDate" type="date" className="form-control" id="kk2"/>
                                <ErrorMessage name="beginDate" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk88" className="form-label">Ngày kết thúc</label>
                                <Field name="endDate" type="date" className="form-control" id="kk88"/>
                                <ErrorMessage name="endDate" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk3" className="form-label">Tiền cọc</label>
                                <Field name="deposit" type="number" className="form-control" id="kk3"/>
                                <ErrorMessage name="deposit" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk4" className="form-label">Tổng thanh toán</label>
                                <Field name="totalAmount" type="number" className="form-control" id="kk4"/>
                                <ErrorMessage name="totalAmount" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-success" type="submit">Thêm mới</button>
                                <a href="/contract" className="btn btn-dark" type="submit">Hủy</a>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>


        </>
    )
}