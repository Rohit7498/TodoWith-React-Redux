import { ADD_TODO, REMOVE_TODO, TOGGLE_EDIT_MODE, UPDATE_TODO } from "./TodoActionTypes"

const initialState = [
    {
        id: 1,
        content: "Go to Gym",
        editMode: false        
    },
    {
        id: 2,
        content: "Master Redux",
        editMode: false        
    },
    {
        id: 3,
        content: "Learn Webpack",
        editMode: false        
    }
]

// reducer ==> (prevState, action) => nextState

const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO: return [...state, action.payload]

        case REMOVE_TODO: return [...state].filter((st)=> st.id !== action.payload.id)

        case TOGGLE_EDIT_MODE: return [...state].map((st)=>{ 
                                                                if(st.id === action.payload.id){
                                                                    const newTodo = st;
                                                                    newTodo.editMode = !newTodo.editMode
                                                                    return newTodo
                                                                }else{
                                                                    return st
                                                                } 
                                                            })
        
        case UPDATE_TODO: return [...state].map(st=>{
            
            if(st.id === action.payload.id){
                const newTodo = st;
                newTodo.content = action.newContent
                newTodo.editMode = !newTodo.editMode
                return newTodo
            }else{
                return st
            }
        })                                                    
                                                            
        default: return state
    }
}

export default todoReducer