import axios from "axios";


export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/customer");
        return res.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const getById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/customer/${id}`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const updateCustomer = async (customer) => {
    try {
        const res = await axios.put(`http://localhost:8080/customer/${customer.id}`, customer)
    } catch (e) {
        console.log(e);
    }
}

export const createCustomer = async (customer) => {
    try {
        const res = await axios.post("http://localhost:8080/customer", customer)
    } catch (e) {
        console.log(e);
    }
}

export const deleteCustomer = async (customer) => {
    try {
        const res = await axios.delete(`http://localhost:8080/customer/${customer.id}`)
    } catch (e) {
        console.log(e);
    }
}