import * as React from 'react'
import classes from './skill.module.css'
import {SkillType} from "../Skills"

type PropsType = {
    skill: SkillType
}

export const Skill = (props: PropsType) =>{
    return (
            <div className={classes.skill}>
                <div className={classes.iconWrapper}>{props.skill.icon}</div>
                <h3>{props.skill.title}</h3>
                <span className={classes.description}>{props.skill.description}</span>
            </div>
    )
}

