import React from 'react';
import classes from './skills.module.css';
import styleContainer from '../common/styles/container.module.css'
import Skill from "./Skill/Skill";
import {DiHtml5} from "react-icons/di";
import {SkillType} from "../App";

type PropsType = {
    skillsArray: Array<SkillType>
}

function Skills(props: PropsType) {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>My skills</h2>
                <div className={classes.skills}>
                    {props.skillsArray.map(s => <Skill skill={s} />)}
                </div>
            </div>
        </div>
    );
}

export default Skills