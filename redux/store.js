import { createStore } from 'redux'
import todoReducer from './Todo/TodoReducers'

const store = createStore(todoReducer)

export default store