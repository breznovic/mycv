import React from 'react'
import classes from './app.module.css'
import Main from "./Main/Main"
import Skills from "./Skills/Skills"
import Works from "./Works/Works"
import Contact from "./Contact/Contact"
import Nav from "./Nav/Nav";
import {Route, Routes} from "react-router-dom";

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
            <div>
                <Routes>
                    <Route path='/' element={<Nav/>}>
                        <Route index element={<Main/>}/>
                        <Route path="skills" element={<Skills/>}/>
                        <Route path="works" element={<Works/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;
