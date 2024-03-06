
import axios from "axios";
export const getAllBook = async () => {
     try {
         const response = await axios.get("http://localhost:8080/bookList");
         return response.data;
     } catch (err) {
         return [];
         console.log(err);
     }
}