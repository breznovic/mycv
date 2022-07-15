import React from 'react'
import classes from './footer.module.css'
import {BsEnvelope, BsTelegram} from 'react-icons/bs'
import {GrGithub} from 'react-icons/all'

type IconType = {
    iconImage: JSX.Element
    icon: string
}

function Footer() {

    let icons: Array<IconType> = [
        {
            icon: 'Telegram',
            iconImage: <BsTelegram className={classes.ContactIcon1}/>
        },
        {
            icon: 'Email',
            iconImage: <BsEnvelope className={classes.ContactIcon2}/>
        },
        {
            icon: 'GitHub',
            iconImage: <GrGithub className={classes.ContactIcon3}/>
        },
    ]

    function Icon(props: IconType) {
        return (
            <div className={classes.skill}>
                <div className={classes.icons}></div>
                <div>{props.iconImage}</div>
                <div>{props.icon}</div>
            </div>
        )
    }

    return (
        <div className={classes.footer}>
            <h2 className={classes.title}>My Contacts</h2>
            <div className={classes.items}>
                {icons.map(i => <Icon
                    iconImage={i.iconImage}
                    icon={i.icon}/>
                )}
            </div>
            <div>
                <span><p>2022 &copy; All rights reserved</p></span>
            </div>
        </div>
    )
}

export default Footer
