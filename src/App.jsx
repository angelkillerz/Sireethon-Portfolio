import { useState } from 'react'
import Navbar from './components/Navbar'
import Bio from './pages/Bio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Projects from './pages/Projects'
import MatrixRain from './components/MatrixRain'
import ProfilePage from './pages/ProfilePage'

function App() {
  
  
  return (
    <div className=''>
      
      <BrowserRouter>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        className='content'

      >
        
        <Navbar/>
        <MatrixRain>
          
        </MatrixRain>
        <Bio/>
        <ProfilePage/>
        <Projects/>
        
        
      </motion.div>
      </BrowserRouter>
    </div>
  )
}

export default App
