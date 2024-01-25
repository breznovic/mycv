import { useEffect, useState } from "react";
import s from "./slider.module.css";
import thorvald from "../../../assets/thorvaldClicker.png";
import todolist from "../../../assets/todolist.png";
import langish from "../../../assets/langish.png";

type AppType = {
  title: string;
  description: string;
  link: string;
};

const Zoom = require("react-reveal/Zoom");

const Slider = () => {
  let images = [thorvald, todolist, langish];
  let apps: AppType[] = [
    {
      title: "Thorvald clicker game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet",
      link: "https://github.com/breznovic/thorvald",
    },
    {
      title: "Todolist",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet",
      link: "https://github.com/breznovic/truetodo",
    },
    {
      title: "Langish",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet",
      link: "https://github.com/breznovic/langish",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const currentApp = apps[activeIndex];

  const interval = 7000;

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={s.slider}>
        <div>
          <h2 className={s.appTitle}>{currentApp.title}</h2>
          <p className={s.description}>{currentApp.description}</p>
        </div>
        <div>
          <button
            onClick={prevSlide}
            className={`${s.sliderButton} ${s.prevButton}`}
          >
            &lt;
          </button>
          <Zoom left>
            <img src={images[activeIndex]} className={s.slideImage} />
          </Zoom>
          <button
            onClick={nextSlide}
            className={`${s.sliderButton} ${s.nextButton}`}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className={s.buttonGroup}>
        <button className={s.button}>Demo</button>
        <button className={s.button}>
          <a href={currentApp.link} target="_blank" rel="noreferrer">
            Code
          </a>
        </button>
      </div>
    </>
  );
};

export default Slider;
