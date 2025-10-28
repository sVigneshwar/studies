import {configureStore} from '@reduxjs/toolkit'
import {api} from '../service/api'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: getUserDefault => getUserDefault().concat(api.middleware)
})
