import React, {Component} from 'react';

class UserInfo extends Component {
    handleNewId(){
        this.props.actions.createNewUserId()
    }
    handleNewUserIdIfOdd() {
        this.props.actions.createNewUserIdIfOdd()
    }
    handleNewUserIdAsync() {
        this.props.actions.createNewUserIdAsync()
    }
    render(){
        return (
            <li>
                <div>username:{this.props.user.username}</div>
                <div>id:{this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Update with randon ID</button>
                <button onClick={this.handleNewUserIdIfOdd.bind(this)}>Update if Odd ID</button>
                <button onClick={this.handleNewUserIdAsync.bind(this)}>Update Async</button>                
            </li>
        )
    }
}

export default UserInfo