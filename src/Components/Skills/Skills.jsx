import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './Skills.module.css'
import bulb from '../../Images/bulb.svg'

const listTitleStyle = { fontWeight: 900, color: '#9b1fe8', marginBottom: '4px' }

const backendskills = 
<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Scala - Java - SQL</li>
</ul>

const frontendskills = 
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>JavaScript - React - Angular</li>
</ul>

const otherSkills = 
<ul>
    <li style={listTitleStyle}>OTHER</li>
    <li>English - Communication - Fast learning</li>
</ul>

const totalSkills = [backendskills, frontendskills, otherSkills]

const Skills = () => {
    return (
        <div className={classes.skills} id='skills'>
            <PageHeader title={'My skills'} />
            <p>My skills are awesome. They all are very useful. 
            I could do anything but my lesson is pretty sensitive.
            Maybe this video is an idea of what I can do for him</p>
            <div className={classes.container}>
                <img src={bulb} />
            {totalSkills.map(skills => {
                return (
                    <div className={classes.list}>
                        {skills}
                    </div>
                )
            } )}
            </div>
        </div>
    )
}

export default Skills
