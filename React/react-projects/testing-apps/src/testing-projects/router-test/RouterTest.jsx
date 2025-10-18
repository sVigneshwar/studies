import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default function RouterTest() {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <NavLink to="/" style={({isActive}) => isActive ? {color: "red"}: {color: "black"}}>Home</NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? {color: "red"}: {color: "black"}}>About</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}
