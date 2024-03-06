import axios from "axios";

export const getAllTodoListService = async () => {
    try {
        const res = await axios.get("http://localhost:8080/TodoList");
        console.log("service")
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err)
        return [];
    }

}