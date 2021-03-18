import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList(props) {
    return (
        <div>
            {props.todos.map(todo => <div key={todo.id}><br/> <TodoItem todo={todo} /> </div>)}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        todos: state
    }
}


export default connect(mapStateToProps)(TodoList)


