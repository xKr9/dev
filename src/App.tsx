import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/shared/Header'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <div className='h-full'>
      <Header />
      <Routes>
        <Route path='/dev/' element={<Home />}/>
        <Route path='/dev/about' element={<About />} />
        <Route path='/dev/projects' element={<Projects />} />
    </Routes>
    </div>
  )
}

export default App