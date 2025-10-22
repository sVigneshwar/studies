import React from 'react'
import Counter from './pages/counter'
import Todo from './pages/todo'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export default function App() {
  
  return(
    <>
    <Router>
      <ul>
        <li><Link to='/counter'>Counter Page</Link></li>
        <li><Link to='/todo'>Todo Page</Link></li>
      </ul>
      
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </Router>
    </>
  )
}
