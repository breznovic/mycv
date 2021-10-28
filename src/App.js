import React from 'react'
import './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import YouTube from './Components/YouTube/YouTube'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <YouTube />
      <Contact />
      </div>
   
  )
}

export default App
