import React from 'react';
import classes from './nav.module.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className={classes.nav}>
            <div><Link to="/">Main</Link></div>
            <div><Link to="/skills">Skills</Link></div>
            <div><Link to="/works">Works</Link></div>
            <div><Link to="/contact">Contact me</Link></div>
        </div>
    )
}

export default Nav