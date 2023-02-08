import { useRef } from 'react'
import senor from '../../assets/senor.webp'
import classes from './main.module.css'


const Main = () => {
  const titleRef = useRef()

  return (
    <section id="about" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Hi, I am Front-end Developer</h2> 
          <h4 className={classes.subtitle}>Front-end Developer</h4>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo, asperiores et? Neque iusto iure, perspiciatis excepturi similique
            assumenda modi laboriosam reiciendis deserunt cupiditate
            facilis inventore minima tempora quidem ullam laborum!
          </p>
        </div>
        <div className={classes.right}>
          <img src={senor} />
        </div>
      </div>
    </section>
  )
}

export default Main