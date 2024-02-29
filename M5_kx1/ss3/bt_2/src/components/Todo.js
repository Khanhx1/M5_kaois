import {Component} from "react";
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        }
    }

    handelChange = (event) => {

        this.setState({item: event.target.value})
        console.log(this.state.item)
    }
    handleAddItem = () => {
        let count = 0;
        for (let i = 0; i < this.state.list.length; i++) {
            if(this.state.item === this.state.list[i]){
                count++;
                break;
            }
        }
        if (count === 0){
            this.setState(prevState => {
                return (
                    {list: [...this.state.list, this.state.item], item: ""}
                )
            });
        }
    }


    render() {
        return (
            <div>
                <div className={"centerDiv"}>
                    <h2>Todo List</h2>
                </div>

                <div className={"centerDiv"}>
                    <input value={this.state.item} type={"text"} onChange={(event) => (this.handelChange(event))}/>
                    <button onClick={(event) => this.handleAddItem()}>Add</button>
                </div>

                <div className={"centerDiv"}>
                    <table>
                        {
                            this.state.list.map((item) => {
                                return (
                                    <tr>
                                        <td>{item}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}

export default Todo;