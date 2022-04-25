import React from 'react';
import classes from './nav.module.css';
import {Link, Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

function Nav() {
    return (
        <div className={classes.NavWrapper}>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/works">Works</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default Nav