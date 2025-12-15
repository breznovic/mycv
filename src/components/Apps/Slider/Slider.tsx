import { useEffect, useState } from "react";
import s from "./Slider.module.css";
import thorvald from "../../../assets/images/thorvaldClicker.png";
import langish from "../../../assets/images/langish.png";
import hacker from "../../../assets/images/hacker.png";
import spellbook from "../../../assets/images/spellbook.png";
import squirrel from "../../../assets/images/squirell.png"
import storyGenerator from "../../../assets/images/storyGenerator.png";

type AppType = {
  title: string;
  description: string;
  link: string;
  deploy: string;
};

const Slider = () => {
  const images = [thorvald, langish, hacker, spellbook, storyGenerator, squirrel];
  const apps: AppType[] = [
    {
      title: "Thorvald clicker game",
      description:
        "A fantasy game about the adventures of troll Thorvald, developed using TypeScript, React Router and Zustand",
      link: "https://github.com/breznovic/thorvald",
      deploy: "https://trollgame.vercel.app/",
    },
    {
      title: "Langish",
      description:
        "An application for learning foreign languages created using TypeScript, Redux Toolkit and React Router",
      link: "https://github.com/breznovic/langish",
      deploy: "https://langish.vercel.app/",
    },
    {
      title: "Hacker News App",
      description:
        "A Hacker News site clone created using TypeScript, Redux Toolkit, React Router, Axios and MUI",
      link: "https://github.com/breznovic/hacker-news",
      deploy: "https://hacker-news-six-drab.vercel.app/",
    },
    {
      title: "Spell Book App",
      description:
        "App with a full CRUD cycle with custom FastAPI backend, created using Next.js and TypeScript",
      link: "https://github.com/breznovic/spell-book",
      deploy: "https://spell-book-nu.vercel.app/",
    },
    {
      title: "Story Generator App",
      description:
        "Full-stack app for generating medieval stories with custom FastAPI backend, built using Next.js and RTK Query",
      link: "https://github.com/breznovic/story-generator",
      deploy: "https://story-generator-zeta.vercel.app/",
    },
    {
      title: "Squirrel Blog",
      description:
        "A blog platform featuring custom Django API, RTK Query, infinite scroll, and theme switching",
      link: "https://github.com/breznovic/squirrel-blog",
      deploy: "https://squirrel-blog.vercel.app/",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const currentApp = apps[activeIndex];

  const interval = 6000;

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
          <img src={images[activeIndex]} />
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
