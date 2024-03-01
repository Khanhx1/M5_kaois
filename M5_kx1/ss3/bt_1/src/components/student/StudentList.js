import React from "react";
import '../../student.css';


class StudentList extends React.Component {

    list = [
        {id: 1, name: "Khanh", age: 20, address: "le 3a"},
        {id: 2, name: "Tham", age: 12, address: "le 4a"},
        {id: 3, name: "Phap", age: 32, address: "le 2a"},
        {id: 4, name: "Huy", age: 43, address: "leha"},
        {id: 5, name: "Dung", age: 12, address: "leh a"},
    ]
    render() {
        return (
            <div>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.list.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default StudentList;