import React from 'react'
import './App.css'
import Main from "./Main/Main"
import Skills from "./Skills/Skills"
import Works from "./Works/Works"
import Contact from "./Contact/Contact"
import Nav from "./Nav/Nav";

function App() {
    return (
        <div>
            <div className='app'>
                <Nav/>
                <Main/>
                <Skills/>
                <Works/>
                <Contact/>
            </div>
        </div>

    )
}

export default App;
