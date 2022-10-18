import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/shared/Header'
import About from './pages/About'

function App() {
  return (
    <div className='px-4 h-full pb-10'>
      <Header />
      <Routes>
        <Route path='/dev/' element={<Home />}/>
        <Route path='/dev/about' element={<About />} />
    </Routes>
    </div>
  )
}

export default App
