import React from 'react'
import classes from './works.module.css'
import styleContainer from '../common/styles/container.module.css'
import Work from './Work/Work'

function Works() {
    return (
        <div>
        <div id="works" className='top-stripe'></div>
        <div className={classes.worksBlock}>

            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <div className={classes.title}>
                    <h2>My works</h2>
                </div>
                <div className={classes.skills}>
                    <Work title='Cats' description='I draw cats' image='https://cdn.mos.cms.futurecdn.net/AESHMNgFLdtaTbA7vsGjmn.jpg'/>
                    <Work title='Mountains' description='I construct mountains' image='https://cdn.britannica.com/73/189273-131-DA3E2F9A/Denali-peak-center-Alaska-Range-North-America.jpg'/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Works