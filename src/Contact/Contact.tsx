import React from 'react';
import classes from './contact.module.css';
import Icon from "./Icon";

function Contact() {
    return (
        <div className={classes.footer}>
            <h2 className={classes.title}>Contact Me</h2>
            <div className={classes.items}>
                <Icon icon='Telegram'/>
                <Icon icon='Email'/>
                <Icon icon='GitHub'/>
            </div>
            <div>
                <span><p>2022 &copy; All rights reserved</p></span>
            </div>
            </div>
    );
}

export default Contact
