import { useEffect, useState } from "react";
import s from "./slider.module.css";
import thorvald from "../../../assets/thorvaldClicker.png";
import todolist from "../../../assets/todolist.png";
import langish from "../../../assets/langish.png";

type AppType = {
  title: string;
  description: string;
  link: string;
  deploy: string;
};

const Zoom = require("react-reveal/Zoom");

const Slider = () => {
  let images = [thorvald, todolist, langish];
  let apps: AppType[] = [
    {
      title: "Thorvald clicker game",
      description:
        "A fantasy game about the adventures of troll Thorvald, developed using TypeScript, Redux Toolkit and React Router",
      link: "https://github.com/breznovic/thorvald",
      deploy: "https://thorvald-a7vt0pgue-breznovics-projects.vercel.app/",
    },
    {
      title: "Todolist",
      description:
        "A simple but functional Todolist made using TypeScript, MUI, Redux Toolkit, Axios, React Router and Formik",
      link: "https://github.com/breznovic/truetodo",
      deploy: "https://todolist-alpha-ecru.vercel.app/",
    },
    {
      title: "Langish",
      description:
        "An application for learning foreign languages created using TypeScript, Redux Toolkit and React Router",
      link: "https://github.com/breznovic/langish",
      deploy: "https://langish-32h641gf7-breznovics-projects.vercel.app/",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const currentApp = apps[activeIndex];

  const interval = 5000;

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

  const toCode = () => {
    window.open(currentApp.link, "_blank");
  };

  const toDeploy = () => {
    window.open(currentApp.deploy, "_blank");
  };

  return (
    <>
      <div className={s.slider}>
        <div className={s.infoContainer}>
          <h2 className={s.appTitle}>{currentApp.title}</h2>
          <p className={s.description}>{currentApp.description}</p>
        </div>
        <div className={s.img}>
          <button
            onClick={prevSlide}
            className={`${s.sliderButton} ${s.prevButton}`}
          >
            &lt;
          </button>
          <Zoom left>
            <img src={images[activeIndex]} />
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
        <button className={s.button} onClick={toDeploy}>
          Demo
        </button>
        <button className={s.button} onClick={toCode}>
          Code
        </button>
      </div>
    </>
  );
};

export default Slider;
