import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './About.module.css'
import me from '../../Images/me.jpg'

const About = () => {
    return (
        <div className={classes.aboutMe}>
            <PageHeader title={'About Me'} />
            <div className={classes.container}>
            <div className={classes.text}>
            <h2>Hello! I'm Vladimir</h2>
            <p>I'm master of IT-technologies and ready to help you.
            You are welcome! I ask you offer to get your exam/test information and code without an interview/polls or anything else.
            We'll be sorry if you don't be able to get an open interview.</p>
            </div>
            <div className={classes.photo}>
            <img className={classes.me} src={me} />
            </div>
            </div>
        </div>
    )
}

export default About
