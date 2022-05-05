import React from 'react';
import classes from './nav.module.css';

function Nav() {
    return (

        <div className={classes.header}>
            <div className={classes.NavWrapper}>
                <nav>
                    <a href="#main">Main</a>
                    <a href="#skills">Skills</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
)
}

export default Nav