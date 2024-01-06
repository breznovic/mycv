import s from "./Apps.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import thorvald from "../../assets/thorvaldClicker.png";
import todolist from "../../assets/todolist.png";
import "swiper/css/free-mode";
import "swiper/css";

const Works = () => {
  return (
    <section id="works" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>My apps examples</h5>
          <h2 className={s.title}>My apps</h2>
          <div className={s.worksContainer}>
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
                <h2 className={s.appTitle}>Thorvald clicker game</h2>
                <p className={s.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  distinctio molestiae, iste sapiente earum porro deleniti
                  adipisci, provident voluptates unde, ipsam quam! Ad, id
                  asperiores. Quasi quam explicabo maiores quisquam!
                </p>
                <div className={s.bottom}>
                  <img src={thorvald} className={s.img} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className={s.appTitle}>Todolist</h2>
                <p className={s.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  distinctio molestiae, iste sapiente earum porro deleniti
                  adipisci, provident voluptates unde, ipsam quam! Ad, id
                  asperiores. Quasi quam explicabo maiores quisquam!
                </p>
                <div className={s.bottom}>
                  <img src={todolist} className={s.img} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className={s.appTitle}>John Doe</h2>
                <p className={s.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  distinctio molestiae, iste sapiente earum porro deleniti
                  adipisci, provident voluptates unde, ipsam quam! Ad, id
                  asperiores. Quasi quam explicabo maiores quisquam!
                </p>
                <div className={s.bottom}>
                  <img
                    src="https://www.imgcorporations.com/images/bg-img.jpg"
                    className={s.img}
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
