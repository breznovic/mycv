import React from 'react'
import classes from './main.module.css'

function Main() {
    return (
        <div className='screen-block bg-image'>
            <div id="main" className='top-stripe'></div>
            <div className={`page-block ${classes.mainWrapper}`}>
                <div className={classes.mainContent}>
                    <h1>Noble Front-end Developer</h1>
                    <p>Evgeniy Berezkin</p>
                    <div className={classes.photo}></div>
                </div>
            </div>
        </div>)
}

export default Main