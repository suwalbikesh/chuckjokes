import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home.js'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </>
  )
}
