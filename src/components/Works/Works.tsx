import classes from './works.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css/free-mode'
import 'swiper/css'

const Works = () => {
    return (
        <section id="works" className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                    <h5 className={classes.subtitle}>My works examples</h5>
                    <h2 className={classes.title}>My apps</h2>
                    <div className={classes.worksContainer}>
                        <Swiper
                          freeMode={true}
                          grabCursor={true}
                          modules={[FreeMode]}
                          className="works"
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                            <SwiperSlide className='work'>
                                <p className={classes.desc}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nam distinctio molestiae, iste sapiente earum porro deleniti adipisci,
                                    provident voluptates unde, ipsam quam! Ad, id asperiores.
                                    Quasi quam explicabo maiores quisquam!
                                </p>
                                <div className={classes.bottom}>
                                    <img src='https://www1.lovethatdesign.com/wp-content/uploads/2019/03/Love-that-Design-NOVO-01.jpg' className={classes.img} style={{ height: '100px' }} />
                                    <h2>John Doe</h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='work'>
                                <p className={classes.desc}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nam distinctio molestiae, iste sapiente earum porro deleniti adipisci,
                                    provident voluptates unde, ipsam quam! Ad, id asperiores.
                                    Quasi quam explicabo maiores quisquam!
                                </p>
                                <div className={classes.bottom}>
                                    <img src='https://www.imgacademy.com/sites/default/files/legacyhotel.jpg' className={classes.img} style={{ height: '100px' }} />
                                    <h2>John Doe</h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='work'>
                                <p className={classes.desc}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nam distinctio molestiae, iste sapiente earum porro deleniti adipisci,
                                    provident voluptates unde, ipsam quam! Ad, id asperiores.
                                    Quasi quam explicabo maiores quisquam!
                                </p>
                                <div className={classes.bottom}>
                                    <img src='https://www.imgcorporations.com/images/bg-img.jpg' className={classes.img} style={{ height: '100px' }} />
                                    <h2>John Doe</h2>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works