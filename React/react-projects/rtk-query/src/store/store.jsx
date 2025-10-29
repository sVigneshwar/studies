import {configureStore} from '@reduxjs/toolkit'
import {postAPI} from '../service/api'

export const store = configureStore({
    reducer: {
        [postAPI.reducerPath]: postAPI.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postAPI.middleware)
})