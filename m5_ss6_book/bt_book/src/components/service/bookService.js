
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

export const getBookById = async (idBook) => {
    try {
        const response = await axios.get(`http://localhost:8080/bookList/${idBook}`);
        const book = response.data;
        console.log("service");
        console.log(book);
        return book;

    } catch (error) {
        console.log(error);
        return {}
    }
}

export const updateBook = async (book) => {
    try {
        const res = axios.put(`http://localhost:8080/bookList/${book.id}`, book)

    } catch (err) {
        console.log(err);
    }
}

export const saveBook = async (book) => {
    try {
        const res = axios.post("http://localhost:8080/bookList", book);
    } catch (err) {
        console.log(err)
    }
}

export const removeBook = async (book) => {
    try {
        const res = await axios.delete(`http://localhost:8080/bookList/${book.id}`)
    } catch (err) {
        console.log(err);
    }
}