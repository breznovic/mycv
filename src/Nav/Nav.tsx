import React from 'react';
import classes from './nav.module.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className={classes.nav}>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/works">Works</Link>
                <Link to="/contact">Contact me</Link>
            </nav>
        </div>
    )
}

export default Nav