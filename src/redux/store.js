import { createStore, combineReducers } from "redux";
import {todos, visibilityFilter} from './reducers'

export default createStore(combineReducers({todos, visibilityFilter}));