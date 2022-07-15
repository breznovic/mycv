import React from 'react'
import classes from './nav.module.css'
import '../App.css'

function Nav() {
    return (

        <div className={`${classes.navWrapper} top-stripe`}>
            <nav>
                <div><a href="#main">Main</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#works">Works</a></div>
                <div><a href="#contact">Contact</a></div>
            </nav>
        </div>
    )
}

export default Nav