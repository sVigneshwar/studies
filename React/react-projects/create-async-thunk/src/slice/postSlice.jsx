import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    getPostData: "",
    getPostLoading: false,
    getPostError: false,
    addPostData: "",
    addPostLoading: false,
    addPostError: false
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPost.pending, (state) => {
                state.getPostLoading = true
                state.getPostError = false
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.getPostLoading = false
                state.getPostError = false
                state.getPostData = action.payload
            })
            .addCase(getPost.rejected, (state) => {
                state.getPostError = true
            })
            .addCase(addPost.pending, (state) => {
                state.addPostLoading = true
                state.addPostError = false
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.addPostLoading = false
                state.addPostError = false
                state.addPostData = action.payload
            })
            .addCase(addPost.rejected, (state) => {
                state.addPostError = true
            })
    }
})

export const getPost = createAsyncThunk('post/getPost', async (_,thunkAPI) => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!res.ok){
            throw Error("Check your URL")
        }
        const data = await res.json()
        return data;
    }catch(err){
        console.log("Get post error");
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const addPost = createAsyncThunk('post/addPost', async (_,thunkAPI) => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: "Vigneshwar's new post"})
        })
        if(!res.ok){
            throw Error("Check your URL")
        }
        const data = await res.json()
        return data;
    }catch(err){
        console.log("Post data error");
        return thunkAPI.rejectWithValue(err.message)
    }
})

export default postSlice.reducer;