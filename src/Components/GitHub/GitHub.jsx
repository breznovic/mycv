import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './GitHub.module.css'
import background from '../../Images/background.svg'

const GitHub = () => {
    return (
        <div className={classes.github} id='github'>
            <img className={classes.background} src={background} />
            <PageHeader title='My GitHub' />
            <div className={classes.githubContent}>
            <div className={classes.paragraph}>
                <p>This is my best works on GitHub. I bought a new project which was built on GitHub with an example. 
                It was but I had different code sources different than that I gave. 
                Anyways, you can make a GitHub example with a setting, not only that explains to anyone what you've got by, but it also will help inmost everyone to improve/expect your work.
                You can use the Example guide to understand usage, guidance, etc. - this example is a commentary as mentioned above.</p>
            </div>
            <div>
            <a href='https://github.com/ganshtel?tab=overview&from=2021-09-01&to=2021-09-30'>My works</a> 
            </div>
            </div>
        </div>
    )
}

export default GitHub
