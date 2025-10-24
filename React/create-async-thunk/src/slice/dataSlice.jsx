import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    endpoint: 'users',
    data: [],
    loading: false,
    error: false
}

const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
    }
})

export default data.reducer;