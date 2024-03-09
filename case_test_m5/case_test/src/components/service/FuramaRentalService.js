import axios from "axios";

export const getAllService = async () => {
    try {
        const res = await axios.get("http://localhost:8080/service");
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getServiceById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/service/${id}`)
        return res.data;
    } catch (err) {
        console.log(err)
    }
}