import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { fetchPost } from './postSlice'

var initialState = {
    userData: 'No Data',
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserData: (state) => {
            state.userData = 'No Data'
        }
    },
    extraReducers: (builders) => {
        builders
            .addCase(fetchUser.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false
                state.userData = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const fetchUser = createAsyncThunk('user/fetchUser', async (_, thunkAPI) => {    
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if(!res.ok){
            throw Error("Something Went Wrong")
        }
        const data = await res.json();

        thunkAPI.dispatch(fetchPost(data.id))

        return data
    }catch(err){
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const {resetUserData} = userSlice.actions;
export default userSlice.reducer;