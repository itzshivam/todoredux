import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

export function addTodo(content) {
    var action = {
        type: ADD_TODO,
        payload: {
            content
        }
    };

    return action;
}

export function toggleTodo(id) {
    var action = {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }

    return action;
}

export function setFilter(filter) {
    var action = {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
    
    return action;
}