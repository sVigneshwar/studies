import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import { store } from './store/store.jsx'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

createRoot(document.getElementById('root')).render(
    <>
    <Provider store={store}>
     <Router>
      <App2 />
      <Routes>
        <Route path="/login" element={<Login />}  />
        <Route path="/dashboard" element={<Dashboard />}  />
      </Routes>
    </Router> 
    </Provider>
    </>
)
