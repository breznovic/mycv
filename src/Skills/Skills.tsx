import React from 'react';
import classes from './skills.module.css';
import styleContainer from '../common/styles/container.module.css'
import Skill from "./Skill/Skill";
import {DiHtml5} from "react-icons/di";

function Skills() {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>My skills</h2>
                <div className={classes.skills}>
                    <Skill title='HTML' description='Write tags, many, many tags everywhere'/>
                    <Skill title='CSS' description='Styles, SCSS'/>
                    <Skill title='JavaScript' description='Know about arrays and so on, my knowledge beyond the limits'/>
                    <Skill title='React' description='Use hooks and this is only beginning, yes, guys!'/>
                    <Skill title='Redux' description='Reducers, dispatches, thunks'/>
                    <Skill title='TypeScript' description='Types, generics and other things'/>
                </div>
            </div>
        </div>
    );
}

export default Skills