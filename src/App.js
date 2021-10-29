import React from 'react'
import './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import GitHub from './Components/GitHub/GitHub'


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <GitHub />
      <Contact />
      </div>
   
  )
}

export default App
