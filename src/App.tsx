import React from 'react'
import classes from './app.module.css'
import Main from "./Main/Main"
import Skills from "./Skills/Skills"
import Works from "./Works/Works"
import Contact from "./Contact/Contact"
import Nav from "./Nav/Nav";

function App() {
    return (
        <div>
            <div className={classes.app}>
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
