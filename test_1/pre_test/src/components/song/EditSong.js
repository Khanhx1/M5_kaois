import {ErrorMessage, Field, Form, Formik} from "formik";
import '../KC.css'
import {useEffect, useState} from "react";
import * as CategoryService from "../service/CategoryService"
import * as SongService from "../service/SongService"
import * as Yup from "yup"
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
export function EditSong() {
    const [categories, setCategories] = useState([]);
    const [song, setSong] = useState();
    const navigation = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        try {
            const list = await CategoryService.getAll();
            setCategories(list);
        } catch (e) {
            console.log(e)
        }
    }

    const getSongById = async () => {
        try {
            const song = await SongService.getById(id);
           const newSong = {...song, category: JSON.stringify(song.category)}
            setSong(newSong)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getSongById();
    }, []);

    const handleSubmit = async (value) => {

        try {
            const newValue = {...value, category: JSON.parse(value.category)}
            console.log(newValue)
            await SongService.save(newValue);
            navigation("/song");
            toast.success("Thành công")
        } catch (e) {
            console.log(e)
        }
    }

    const validation = {
        name: Yup.string().required("dien vao"),
        description: Yup.string().required("dien vao")
    }

    if(!categories || !song) {return (<div>Loading...</div>)}

    return (
        <>
            <div className="d-flex justify-content-center row ">
                <h2 className="col-12 d-flex justify-content-center mt-5 mb-3">Thêm mới bài hát</h2>
            </div>

            <div className="d-flex justify-content-center row mb-5">
                <div className="col-5">
                    <Formik initialValues={song} onSubmit={handleSubmit} validationSchema={Yup.object(validation)}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="kk1" className="form-label">Tên bài hát</label>
                                <Field name="name" type="text" className="form-control" id="kk1"/>
                                <ErrorMessage name="name" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk2" className="form-label">Mô tả</label>
                                <Field name="description" type="text" className="form-control" id="kk2"/>
                                <ErrorMessage name="description" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kk3" className="form-label">Thể loại</label>
                                <Field name="category" as="select" className="form-control" id="kk3" required>
                                    <option value="" disabled selected>Chọn</option>
                                    {
                                        categories.map((item) => (
                                            <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage name="category" component="span" className="k-span"></ErrorMessage>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-success" type="submit">Thêm mới</button>
                                <Link to="/song" className="btn btn-dark" type="submit">Hủy</Link>
                            </div>


                        </Form>


                    </Formik>

                </div>
            </div>


        </>
    )
}