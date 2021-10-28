import React from 'react'
import classes from './Home.module.css'
import code from '../../Images/code.svg'
import world from '../../Images/world.svg'

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <h1 className={classes.hello}>Hello, there!</h1>
                <h1>Welcome on my website</h1>
            </div>
            <img className={classes.code} src={code} />
            <img className={classes.world} src={world} />
        </div>
    )
}

export default Home
