import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/shared/Header'
import About from './pages/About'
import ProjectList from './pages/ProjectList'
import Contact from './pages/Contact'
import Project from './pages/Project'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <div className='pb-10 relative max-w-5xl mx-auto'>
      <Header />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/dev/' element={<Home />}/>
          <Route path='/dev/about' element={<About />} />
          <Route path='/dev/projects' element={<ProjectList />} />
          <Route path='/dev/projects/:slug' element={<Project />} />
          <Route path='/dev/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
