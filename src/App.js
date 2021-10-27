import React from 'react'
import './App.scss'
import Intro from './Components/Intro/Intro'
import Topbar from './Components/Topbar/Topbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Works from './Components/Works/Works'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className='app'>
      <Topbar />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App
