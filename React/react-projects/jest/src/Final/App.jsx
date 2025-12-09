import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AppRouter from './routes/AppRouter'
import './styles/app.css'
import { BrowserRouter } from 'react-router-dom'
import { login } from './features/auth/authSlice'

export default function App(){
  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    if(token && username){
      store.dispatch(login({name: username, token}))
    }
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
