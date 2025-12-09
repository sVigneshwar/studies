import authReducer, {login, logout} from '../../Final/features/auth/authSlice'

test('login and logout reducers', ()=>{
  let state = authReducer(undefined, {type: 'init'})
  state = authReducer(state, login({name:'x'}))
  expect(state.isLoggedIn).toBe(true)
  state = authReducer(state, logout())
  expect(state.isLoggedIn).toBe(false)
})
