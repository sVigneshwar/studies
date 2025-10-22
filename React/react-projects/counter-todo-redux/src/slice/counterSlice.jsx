import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    count: JSON.parse(localStorage.getItem("Count")) || 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.count += 1
            localStorage.setItem("Count", state.count)
        },
        decrement: (state) => {
            state.count -= 1
            localStorage.setItem("Count",state.count)
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer