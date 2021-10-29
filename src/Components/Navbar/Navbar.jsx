import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/#about'>About Me</a>
                    </li>
                    <li>
                        <a href='/#skills'>My skills</a>
                    </li>
                    <li>
                        <a href='/#github'>My GitHub</a>
                    </li>
                    <li>
                        <a href='/#contact'>Contact</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
