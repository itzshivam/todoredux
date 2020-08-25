import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {todoInput: ""}
    }

    handleOnChange(value) {
        this.setState({todoInput: value});
    }

    handleAdd() {
        this.props.dispatch(addTodo(this.state.todoInput));
        this.setState({todoInput: ""});
    }

    render() {
        return (
            <div className="align">
                <input type="text" placeholder="You text here" onChange={e => this.handleOnChange(e.target.value)} value={this.state.todoInput}/>
                <button onClick= {e => this.handleAdd()}>Add</button>
                <br /><br />
            </div>
        );
    }
}

export default connect()(AddTodo)