import React, {Component} from "react"

class TodoItem extends Component {
    handleDelete() {
        this.props.actions.deleteTodo(this.props.todo.id);
    }
    handleComplete() {
        this.props.actions.completeTodo(this.props.todo.id);
    }

    render() {
        return (
            <li>
                <div>{this.props.todo.text}</div>
                <button onClick={this.handleComplete.bind(this)}>Complete</button>
                <button onClick={this.handleDelete.bind(this)}>Delete</button>                
            </li>
        )
    }
}

export default TodoItem