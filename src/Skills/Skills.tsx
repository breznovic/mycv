import React from 'react';
import classes from './skills.module.css';
import styleContainer from '../common/styles/container.module.css'
import Skill from "./Skill/Skill";
import {DiCss3, DiHtml5, DiJsBadge, DiReact} from "react-icons/di";
import classes2 from "./Skill/skill.module.css";
import {SiRedux, SiTypescript} from "react-icons/all";

export type SkillType = {
    title: string
    description: string
    icon: JSX.Element
}

function Skills() {

    let skillsArray: Array<SkillType> = [
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <DiHtml5 className={classes2.SkillIcon}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <DiCss3 className={classes2.SkillIcon}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <DiJsBadge className={classes2.SkillIcon}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <DiReact className={classes2.SkillIcon}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <SiRedux className={classes2.SkillIcon}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <SiTypescript className={classes2.SkillIcon}/>
        }
    ]

    return (
        <div className={classes.skillsBlock}>
            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title} id="skills">My skills</h2>
                <div className={classes.skills}>
                    {skillsArray.map(s => <Skill skill={s} />)}
                </div>
            </div>
        </div>
    );
}

export default Skills