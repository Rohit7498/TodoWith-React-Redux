import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from '../../redux' 

function AddTodo(props) {
    const [text, setText] = useState('')
    const addTextToTodo = (e)=>{
      const content = e.target.value
      setText(()=>content)
    }
    return (
        <div>
          <input type="text" value={text} onChange={addTextToTodo}/> &nbsp;
          <button onClick={() => props.addTodo(text)}>Add Todo</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addTodo: (text) => {
      const todo = {
        id: uuidv4(),
        content: text,
        editMode: false
      }
      dispatch(addTodo(todo))
    }
  }
}


export default connect(null, mapDispatchToProps)(AddTodo)
