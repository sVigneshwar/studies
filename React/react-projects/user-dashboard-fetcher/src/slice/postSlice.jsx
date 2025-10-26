import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { resetUserData } from './userSlice'

var initialState = {
    postData: 'No Data',
    postLoading: false,
    postError: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: (builders) => {
            builders
                .addCase(fetchPost.pending, state => {
                    state.postLoading = true
                    state.postError = null
                })
                .addCase(fetchPost.fulfilled, (state, action) => {
                    state.postLoading = false
                    state.postData = action.payload
                })
                .addCase(fetchPost.rejected, (state, action) => {
                    state.postLoading = false
                    state.postError = action.payload
                })
                .addCase(resetUserData, state => {
                    state.postData = 'No Data'
                    state.postError = null
                    state.postLoading = false
                })
        }
})

export const fetchPost = createAsyncThunk('post/fetchPost', async (userId, thunkAPI) => {    
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        if(!res.ok){
            throw Error("Something Went Wrong")
        }
        return res.json()
    }catch(err){
        return thunkAPI.rejectWithValue(err.message)
    }
})

export default postSlice.reducer;