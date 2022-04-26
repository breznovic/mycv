import React from 'react';
import classes from './contact.module.css';
import {BsEnvelope, BsTelegram} from "react-icons/bs";
import {GrGithub} from "react-icons/all";

type IconType = {
    iconImage: JSX.Element
    icon: string
}

function Contact() {

    let icon: Array<IconType> = [
        {
            icon: 'Telegram',
            iconImage: <BsTelegram/>
        },
        {
            icon: 'Email',
            iconImage: <BsEnvelope/>
        },
        {
            icon: 'GitHub',
            iconImage: <GrGithub/>
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
            <h2 className={classes.title}>Contact Me</h2>
            <div className={classes.items}>
                {icon.map(i => <Icon
                    iconImage={i.iconImage}
                    icon={i.icon}/>
                )}
            </div>
            <div>
                <span><p>2022 &copy; All rights reserved</p></span>
            </div>
        </div>
    );
}

export default Contact
