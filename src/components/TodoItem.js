import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { removeTodo, toggleEdit, upadateTodo } from '../../redux'

function TodoItem(props) {
    const dispatch = useDispatch()
    const [text, setText] = useState(props.todo.content)
    return (
        <div>
        {!props.todo.editMode ? 
        <>
            <p style={{display: 'inline-block'}}>{props.todo.content}</p>&nbsp;
            <button onClick={()=>dispatch(removeTodo(props.todo))}>Delete</button>&nbsp;<button onClick={()=>dispatch(toggleEdit(props.todo))}>Edit</button>
        </> :
        <>
            <input style={{display: 'inline-block'}} value={text} type="text" onChange={(e)=>setText(()=>e.target.value)} />&nbsp;
            <button onClick={()=>dispatch(toggleEdit(props.todo))}>Cancel</button>&nbsp;<button onClick={()=>dispatch(upadateTodo(props.todo, text))}>Update</button>
            
        </> 
        }
            
        </div>
    )
}

export default TodoItem
