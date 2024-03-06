import {useEffect, useState} from "react";
import * as toDoListService from "../service/TodoListService";
import {Field, Form, Formik} from "formik";
import axios from "axios";



export function TodoList() {
    const [toDoList, setToDoList] = useState([]);
    const [item, setItem] = useState({});

    const initValue = {
        id: '',
        item: ''
    }


    const getAll = async () => {
        const list = await toDoListService.getAllTodoListService();
        setToDoList(list);
    }

    useEffect(() => {
        console.log(2);
        getAll();
    }, [item]);

    const handleSubmit = async (value) => {

        console.log(value)
        try {
            const res = await axios.post("http://localhost:8080/TodoList", {item : value.item});
            setItem(prevState => res.data);
            console.log("response: ")
            console.log(res.data)
        } catch (err){
            console.log(err);
        }
        alert("successfull")
    }

    return (
        <>
            <h2>Todo list</h2>
            <Formik initialValues={initValue} onSubmit={handleSubmit}>
                <Form>
                    <Field type = "text" name = "item"></Field>
                    <button type="submit">Submit</button>

                </Form>

            </Formik>


            <table>
               <thead>

               </thead>
                <tbody>
                {
                    toDoList.map((element,index) => (
                        <tr key={element.id}>
                            <td>{index+1}</td>
                            <td>{element.item}</td>
                        </tr>
                    ))

                }
                </tbody>
            </table>


        </>


    )


}