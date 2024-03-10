import axios from "axios";


  export const getAll = async () => {
        try {
            const res = await axios.get("http://localhost:8080/employee");
            return res.data;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    export const getById = async (id) => {
      try {
          const res = await axios.get(`http://localhost:8080/employee/${id}`)
      return res.data;
      } catch (e) {
          console.log(e);
      }
    }

    export const updateEmployee = async (employee) => {
      try {
          const res = await axios.put(`http://localhost:8080/employee/${employee.id}`, employee)
      } catch (e) {
          console.log(e);
      }
    }

export const createEmployee = async (employee) => {
    try {
        const res = await axios.post("http://localhost:8080/employee", employee)
    } catch (e) {
        console.log(e);
    }
}

export const deleteEmployee = async (employee) => {
    try {
        const res = await axios.delete(`http://localhost:8080/employee/${employee.id}`)
    } catch (e) {
        console.log(e);
    }
}
