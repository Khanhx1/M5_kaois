import {useEffect, useState} from "react";
import * as ContractService from '../service/ContractService'
import moment from "moment";
export function Contract() {

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        try {
            const list = await ContractService.getAllContract();
            setContracts(list);
        } catch (e) {
            console.log(e)
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

    if (!contracts) {return (<div>Loading ding...</div>)}

    return (

        <>
            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Danh sách hợp đồng</h2>
            </div>
            <div className="row mx-5">
                <div className="col-2">
                    <a href="/contract/create" className="btn btn-primary">Tạo một hợp đồng</a>

                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mx-5 mt-5 mb-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Số hợp đồng</th>
                        <th scope="col">Loại hình thuê</th>
                        <th scope="col">Ngày bắt đầu</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Số tiền cọc (vnđ)</th>
                        <th scope="col">Tổng số tiền thanh toán (vnđ)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contracts.map((contract, index) => (
                            <tr key={contract.id}>
                                <td>{index + 1}</td>
                                <td>{contract.contractCode}</td>
                                <td>{contract.service}</td>
                                <td>{convertDate(contract.beginDate)}</td>
                                <td>{convertDate(contract.endDate)}</td>
                                <td>{formatMoney(contract.deposit)}</td>
                                <td>{formatMoney(contract.totalAmount)}</td>
                            </tr>
                        ))

                    }


                    </tbody>
                </table>
            </div>


        </>
    )

}