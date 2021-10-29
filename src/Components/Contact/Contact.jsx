import React from 'react'
import classes from './Contact.module.css'
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa'

const handleURL = (url) => {
    return () => window.open(url, '_blank')
}

const Contact = () => {
    return (
        <div>
            <div className={classes.contact} id='contact'>
            <div className={classes.contactItems}>
            <FaDiscord color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://discord.com/')} />
            <FaTelegram color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://telegram.org/')} />
            <FaTwitter color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://twitter.com/tapkichay')} />
            </div>
            </div>
        </div>
    )
}

export default Contact
