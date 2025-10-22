import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    todoInput: "",
    todos: JSON.parse(localStorage.getItem("TodoList")) || []
}

var todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        updateTodoInput: (state, action) => {
            state.todoInput = action.payload
        },
        clearInput: (state) => {
            state.todoInput = ""
        },
        addTodo: (state, action) =>{
            state.todos.push({id: Date.now(), value: action.payload, completed: false})
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(val => val.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map(val => {
                if(val.id === action.payload){
                    val.completed ? val.completed = false: val.completed = true
                    return val
                }else{
                    return val
                }
            })
        }
    }
})

export const {updateTodoInput, clearInput, addTodo, deleteTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer;