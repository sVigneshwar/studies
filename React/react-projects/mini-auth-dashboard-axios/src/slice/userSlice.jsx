import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    formData: {username: "emilys", password: "emilyspass"},
    errorBox: "",
    token: localStorage.getItem("token"),
    submitting: false,
    userData: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleInputChange: (state, actions) => {
            const {key, value} = actions.payload
            state.formData[key] = value
        },
        updateToken: (state, action) => {
            state.token = action.payload
        },
        updateError: (state, action) => {
            state.errorBox = action.payload
        },
        updateUserData: (state, action) => {
          state.userData = action.payload  
        },
        updateLoading: (state, action) => {
            state.submitting = action.payload
        }
    }
})

export const {handleInputChange, updateToken, updateError, updateUserData, updateLoading} = userSlice.actions
export default userSlice.reducer;