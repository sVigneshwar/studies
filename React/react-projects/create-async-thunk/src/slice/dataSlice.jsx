import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'



const initialState = {
    endpoint: 'users',
    data: [],
    loading: false,
    error: null
}

const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateEndpoint: (state, action) => {
            state.endpoint = action.payload
            state.error = null,
            state.data= []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDatas.pending, state => {
                state.loading = true
            })
            .addCase(fetchDatas.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchDatas.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const fetchDatas = createAsyncThunk('data/fetchDatas', async(_,thunkAPI) => {
    const state = thunkAPI.getState();
    const {endpoint} = state.data;
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        if(!res.ok){
            return thunkAPI.rejectWithValue("URL Error")
        }
        return res.json()
    }catch(err){
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const { updateEndpoint, fetchInit, fetchSuccess, fetchError } = data.actions;
export default data.reducer;