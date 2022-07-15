import React from 'react'
import './App.css'
import Main from './Main/Main'
import Skills from './Skills/Skills'
import Works from './Works/Works'
import Nav from './Nav/Nav'
import {Contact} from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
    return (
        <div>
            <div className='app'>
                <Nav/>
                <Main/>
                <Skills/>
                <Works/>
                <Contact/>
                <Footer/>
            </div>
        </div>

    )
}

export default App;
