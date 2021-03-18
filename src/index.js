import React from 'react'
import ReactDOM from 'react-dom'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import store from '../redux/store'
import TodoList from './components/TodoList'

const App = ()=>{
    return (
        <>
            <Provider store={store} >
                <h1>Todo App</h1>
                <AddTodo />
                <TodoList />
            </Provider>
            
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))