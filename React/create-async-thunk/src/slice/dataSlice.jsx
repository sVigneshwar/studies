import {createSlice} from '@reduxjs/toolkit'

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
        fetchInit: (state)=>{
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchError: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const fetchData = () => async (dispatch, getState) => {
    
    try{
        const {endpoint} = getState().data
        dispatch(fetchInit())
        const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        if(!res.ok){
            throw Error("URL Error")
        }
        const result = await res.json()     
        dispatch(fetchSuccess(result))
    }catch(err){
        dispatch(fetchError(err.message))
    }
}

export const { updateEndpoint, fetchInit, fetchSuccess, fetchError } = data.actions;
export default data.reducer;