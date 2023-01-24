import React from 'react'
import classes from './contact.module.css'

const Contact = () => {
    return (
        <section id="contact"  className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                    <h5 className={classes.subtitle}>Where to find me</h5>
                    <h2 className={classes.title}>Contacts</h2>
                </div>
                <div className={classes.sides}>
                    <div className={classes.left}>
                        <div className={classes.cards}>
                            <div className={classes.left}>
                                <div className={classes.card}>
                                    <span>Phone <i className="ri-phone-line"></i></span>
                                    <span>+1 1 1 1 1</span>
                                </div>
                                <div className={classes.card}>
                                    <span>Email <i className="ri-mail-line"></i></span>
                                    <span>gmail@gmail.com</span>
                                </div>
                            </div>

                            <div className={classes.right}>
                                <div className={classes.card}>
                                    <span>YouTube <i className="ri-youtube-line"></i></span>
                                    <span>Berezkin</span>
                                </div>
                                <div className={classes.card}>
                                    <span>Location <i className="ri-map-pin-line"></i></span>
                                    <span>Russia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <form>
                            <input type="text" placeholder='Topic...' />
                            <input type="email" placeholder='Your email...' />
                            <textarea placeholder='Message...' />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact