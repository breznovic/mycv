import React from 'react';
import classes from './skill.module.css';
import {DiHtml5} from "react-icons/di";
import {SkillType} from "../../App";

type PropsType = {
    skill: SkillType
}

function Skill(props: PropsType) {
    return (
        
        <div className={classes.skill}>
            {/*<div className={classes.icon}></div>*/}
            {props.skill.icon}
            <h3>{props.skill.title}</h3>
            <span className={classes.description}>
                {props.skill.description}
            </span>
        </div>
    )
}

export default Skill