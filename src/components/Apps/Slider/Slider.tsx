import { useEffect, useState } from "react";
import s from "./slider.module.css";
import thorvald from "../../../assets/thorvaldClicker.png";
import todolist from "../../../assets/todolist.png";
import langish from "../../../assets/langish.png";

const Slider = () => {
  let images = [thorvald, todolist, langish];
  let apps = [
    {
      title: "Thorvald clicker game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet",
    },
    {
      title: "Todolist",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet",
    },
    {
      title: "Langish",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet",
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
    <div className={s.slider}>
      <div>
        <h2 className={s.appTitle}>{currentApp.title}</h2>
        <p className={s.description}>{currentApp.description}</p>
      </div>
      <button onClick={prevSlide} className={`${s.button} ${s.prevButton}`}>
        &lt;
      </button>
      <div>
        <img src={images[activeIndex]} className={s.slideImage} />
      </div>
      <button onClick={nextSlide} className={`${s.button} ${s.nextButton}`}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;



            <div className={s.bottom}>
              <img src={thorvald} className={s.img} />
            </div>