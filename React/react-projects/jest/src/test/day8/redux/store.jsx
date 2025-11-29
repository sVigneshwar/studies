import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice.jsx'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})