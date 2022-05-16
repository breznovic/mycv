import React from 'react';
import classes from './skills.module.css';
import styleContainer from '../common/styles/container.module.css'
import Skill from "./Skill/Skill";
import {DiCss3, DiHtml5, DiJsBadge, DiReact} from "react-icons/di";
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
            icon: <DiHtml5 style={{width: '96%', height: '96%', margin: '2% 0'}}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <DiCss3 style={{width: '96%', height: '96%', margin: '2% 0'}}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <DiJsBadge style={{width: '84%', height: '84%', margin: '8% 0'}}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <DiReact style={{width: '100%', height: '100%'}}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <SiRedux style={{width: '86%', height: '86%', margin: '7% 0'}}/>
        },
        {
            title: 'dsfdsfds',
            description: 'Write tags, many, many tags everywhere',
            icon: <SiTypescript style={{width: '84%', height: '84%', margin: '8% 0'}}/>
        }
    ]

    return (
        <div>
            <div id="skills" className='top-stripe'></div>
            <div className={classes.skillsBlock}>
                <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                    <h2 className={classes.title}>My skills</h2>
                    <div className={classes.skills}>
                        {skillsArray.map(s => <Skill skill={s} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills