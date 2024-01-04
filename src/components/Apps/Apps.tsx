import classes from "./apps.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import thorvald from "../../assets/thorvaldClicker.png";
import "swiper/css/free-mode";
import "swiper/css";

const Works = () => {
  return (
    <section id="works" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5 className={classes.subtitle}>My apps examples</h5>
          <h2 className={classes.title}>My apps</h2>
          <div className={classes.worksContainer}>
            <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode, Autoplay]}
              slidesPerView={1}
              spaceBetween={100}
              allowSlideNext={true}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <h2 className={classes.appTitle}>Thorvald clicker game</h2>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  distinctio molestiae, iste sapiente earum porro deleniti
                  adipisci, provident voluptates unde, ipsam quam! Ad, id
                  asperiores. Quasi quam explicabo maiores quisquam!
                </p>
                <div className={classes.bottom}>
                  <img src={thorvald} className={classes.img} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className={classes.appTitle}>John Doe</h2>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  distinctio molestiae, iste sapiente earum porro deleniti
                  adipisci, provident voluptates unde, ipsam quam! Ad, id
                  asperiores. Quasi quam explicabo maiores quisquam!
                </p>
                <div className={classes.bottom}>
                  <img
                    src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
                    className={classes.img}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className={classes.appTitle}>John Doe</h2>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  distinctio molestiae, iste sapiente earum porro deleniti
                  adipisci, provident voluptates unde, ipsam quam! Ad, id
                  asperiores. Quasi quam explicabo maiores quisquam!
                </p>
                <div className={classes.bottom}>
                  <img
                    src="https://www.imgcorporations.com/images/bg-img.jpg"
                    className={classes.img}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
