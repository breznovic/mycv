import React from 'react';
import classes from './nav.module.css';
import {NavLink, Outlet} from "react-router-dom";

function Nav() {
    return (

        <div className={classes.header}>
            <div className={classes.NavWrapper}>
                <div><NavLink to="/">Main</NavLink></div>
                <div><NavLink to="/skills">Skills</NavLink></div>
                <div><NavLink to="/works">Works</NavLink></div>
                <div><NavLink to="/contact">Contact</NavLink></div>
            </div>
            <Outlet/>
        </div>
  
)
}

export default Nav