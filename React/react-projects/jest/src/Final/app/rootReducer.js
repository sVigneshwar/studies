import {combineReducers} from 'redux'
import auth from '../features/auth/authSlice'

export const rootReducer = combineReducers({
  auth
})

export default rootReducer
