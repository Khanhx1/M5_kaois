import axios from "axios";

export const getAll = async (asc) => {
    try {
        const res = await axios.get(`http://localhost:8080/songs?_sort=name`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const save = async (song) => {
    try {
        const res = await axios.post("http://localhost:8080/songs", song);
    } catch (e) {
        console.log(e);
    }
}

export const getById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/songs/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const deleteSong = async (song) => {
    try {
        const res = await axios.delete(`http://localhost:8080/songs/${song.id}`);
    } catch (e) {
        console.log(e);
    }
}