import React, {Component} from "react"

class TodoInput extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText:""
        }
    }

    handleChanged(event) {
        this.setState({
            inputText:event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.addTodo(this.state.inputText);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        placeholder="Type you todo"
                        value={this.state.inputText}
                        onChange={this.handleChanged.bind(this)}
                        />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default TodoInput