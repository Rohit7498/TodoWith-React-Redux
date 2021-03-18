import { ADD_TODO, REMOVE_TODO, TOGGLE_EDIT_MODE, UPDATE_TODO } from './TodoActionTypes'


// action creators
export const addTodo = (todo)=>{
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const removeTodo = (todo)=>{
    return {
        type: REMOVE_TODO,
        payload: todo
    }
}

export const toggleEdit = (todo)=>{
    return {
        type: TOGGLE_EDIT_MODE,
        payload: todo
    }
}

export const upadateTodo = (todo, content)=>{
    return {
        type: UPDATE_TODO,
        payload: todo,
        newContent: content
    }
}
