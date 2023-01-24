import React from 'react'
import classes from './skills.module.css'

const Skills = () => {
    return (
        <section id="skills" className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                    <h5 className={classes.subtitle}>What I offer</h5>
                    <h2 className={classes.title}>Services</h2>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <span>Web Development <div className={classes.circles}><div className={classes.circle} /> <div className={classes.circle} /> <div className={classes.circle} /></div></span>
                            <i className="ri-code-s-slash-fill"></i>
                        </div>
                        <div className={classes.bottom}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum officia quaerat hic rem aut tenetur pariatur recusandae a id facere ducimus eius totam libero ut, veniam accusamus earum tempore?
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <span>Web Design <div className={classes.circles}><div className={classes.circle} /> <div className={classes.circle} /> <div className={classes.circle} /></div></span>
                            <i className="ri-pencil-line"></i>
                        </div>
                        <div className={classes.bottom}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum officia quaerat hic rem aut tenetur pariatur recusandae a id facere ducimus eius totam libero ut, veniam accusamus earum tempore?                    </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <span>Backend <div className={classes.circles}><div className={classes.circle} /> <div className={classes.circle} /> <div className={classes.circle} /></div></span>
                            <i className="ri-braces-line"></i>
                        </div>
                        <div className={classes.bottom}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum officia quaerat hic rem aut tenetur pariatur recusandae a id facere ducimus eius totam libero ut, veniam accusamus earum tempore?
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <span>Graphics Design <div className={classes.circles}><div className={classes.circle} /> <div className={classes.circle} /> <div className={classes.circle} /></div></span>
                            <i className="ri-image-line"></i>
                        </div>
                        <div className={classes.bottom}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum officia quaerat hic rem aut tenetur pariatur recusandae a id facere ducimus eius totam libero ut, veniam accusamus earum tempore?
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <span>SEO <div className={classes.circles}><div className={classes.circle} /> <div className={classes.circle} /> <div className={classes.circle} /></div></span>
                            <i className="ri-search-eye-line"></i>
                        </div>
                        <div className={classes.bottom}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum officia quaerat hic rem aut tenetur pariatur recusandae a id facere ducimus eius totam libero ut, veniam accusamus earum tempore?
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <span>Desktop Development <div className={classes.circles}><div className={classes.circle} /> <div className={classes.circle} /> <div className={classes.circle} /></div></span>
                            <i className="ri-computer-line"></i>
                        </div>
                        <div className={classes.bottom}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum officia quaerat hic rem aut tenetur pariatur recusandae a id facere ducimus eius totam libero ut, veniam accusamus earum tempore?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills