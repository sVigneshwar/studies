import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice'
import postReducer from '../slice/postSlice'
import user1Reducer from '../slice/user1Slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        user1: user1Reducer
    }
})