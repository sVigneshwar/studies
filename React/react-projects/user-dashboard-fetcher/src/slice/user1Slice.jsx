import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

var initialState = {
    user1Data: 'No Data',
    user1Loading: false,
    user1Error: null
}

const user1Slice = createSlice({
    name: 'user1',
    initialState,
    reducers: {
        resetUserData: (state) => {
            state.user1Data = 'No Data'
        }
    },
    extraReducers: (builders) => {
        builders
            .addCase(fetchUser1.pending, state => {
                state.user1Loading = true
                state.user1Error = null
            })
            .addCase(fetchUser1.fulfilled, (state, action) => {
                state.user1Loading = false
                state.user1Data = action.payload
            })
            .addCase(fetchUser1.rejected, (state, action) => {
                state.user1Loading = false
                state.user1Error = action.payload
            })
            .addCase(postUser1.pending, state => {
                state.user1Loading = true
                state.user1Error = null
            })
            .addCase(postUser1.fulfilled, (state, action) => {
                state.user1Loading = false
                state.user1Data = action.payload
            })
            .addCase(putUser1.pending, state => {
                state.user1Loading = true
                state.user1Error = null
            })
            .addCase(putUser1.fulfilled, (state, action) => {
                state.user1Loading = false
                state.user1Data = action.payload
            })
            .addCase(patchUser1.pending, state => {
                state.user1Loading = true
                state.user1Error = null
            })
            .addCase(patchUser1.fulfilled, (state, action) => {
                state.user1Loading = false
                state.user1Data = action.payload
            })
            .addCase(deleteUser1.fulfilled, (state, action) => {
                state.user1Loading = false
                state.user1Data = action.payload
            });

    }
})

export const fetchUser1 = createAsyncThunk('user1/fetchUser1', async (_, thunkAPI) => {    
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if(!res.ok){
            throw Error("Something Went Wrong")
        }
        const data = await res.json();

        return data
    }catch(err){
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const postUser1 = createAsyncThunk('user1/postUser1', async(newUser) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    const data = await res.json() 
    return data;
});
export const putUser1 = createAsyncThunk('user1/putUser1', async({id, updates}) => {
    console.log(id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updates)
    })
    const data = await res.json() 
    return data;
});
export const patchUser1 = createAsyncThunk('user1/patchUser1', async({id, updates}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updates)
    })
    const data = await res.json() 
    return data;
});
export const deleteUser1 = createAsyncThunk('user1/deleteUser1', async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`, {
        method: 'DELETE'
    })
    const data = await res.json()
    return data
});

export default user1Slice.reducer;