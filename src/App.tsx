import React from 'react'
import classes from './app.module.css'
import Header from "./Header/Header"
import Main from "./Main/Main"
import Skills from "./Skills/Skills"
import Works from "./Works/Works"
import Contact from "./Contact/Contact"
import {DiCss3, DiHtml5, DiJsBadge, DiReact} from "react-icons/di";
import {SiRedux, SiTypescript} from "react-icons/all";
import classes2 from './Skills/Skill/skill.module.css';

export type SkillType = {
    title: string
    description: string
    icon: JSX.Element
}

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

function App() {
    return (
        <div className={classes.app}>
            <Header/>
            <Main/>
            <Skills skillsArray={skillsArray} />
            <Works/>
            <Contact/>
        </div>
    )
}

export default App;
