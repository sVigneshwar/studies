import {createSlice} from '@reduxjs/toolkit'

var initialState = {
    postData: 'No Data'
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    }
})

export default postSlice.reducer;