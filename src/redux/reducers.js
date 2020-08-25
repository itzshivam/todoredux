import { ADD_TODO, TOGGLE_TODO, FILTER_ALL, SET_FILTER } from "./actionTypes";

const initialToDoState = {
    data: {
        1: {
            content: "First todo",
            completed: false
        }
    },
    nextId: 2
}

const initialFilter = {
    activeFilter: FILTER_ALL
}

export function todos(state = initialToDoState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                data: {
                    ...state.data,
                    [state.nextId]: {
                        content: action.payload.content,
                        completed: false
                    }
                },
                nextId: state.nextId + 1
            }
        case TOGGLE_TODO:
            return {
                data: {
                    ...state.data,
                    [action.payload.id]: {
                        content: state.data[action.payload.id].content,
                        completed: !state.data[action.payload.id].completed
                    }
                }
            }
        default:
            return state;

    }
}

export function visibilityFilter(state = initialFilter, action) {
    switch (action.type) {
        case SET_FILTER:
            return {
                activeFilter: action.payload.filter
            }
        default:
            return state;
    }
}