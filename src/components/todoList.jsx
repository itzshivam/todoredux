import React from 'react'
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } from '../redux/actionTypes';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className={this.props.todo.completed ? 'completed': ''} onClick={() => this.props.dispatch(toggleTodo(this.props.id))}>{this.props.todo.content}</li>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {Object.keys(this.props.todos).map(key => (
                    <Todo id={key} todo={this.props.todos[key]} dispatch={this.props.dispatch} />
                ))}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    if (state.visibilityFilter.activeFilter == FILTER_ALL) {
        return {
            todos: state.todos.data
        }
    }

    if(state.visibilityFilter.activeFilter == FILTER_COMPLETED) {
        var todos = {}
        for (var key in state.todos.data) {
            if (state.todos.data[key].completed) {
                todos[key] = state.todos.data[key];
            }
        }
        return {
            todos: todos
        }
    }
    
    if(state.visibilityFilter.activeFilter == FILTER_INCOMPLETE) {
        var todos = {}
        for (var key in state.todos.data) {
            if (!state.todos.data[key].completed) {
                todos[key] = state.todos.data[key];
            }
        }
        return {
            todos: todos
        }
    }
}

export default connect(mapStateToProps)(TodoList);