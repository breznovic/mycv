import s from "./main.module.css";
import photo from "../../assets/myPhoto.jpg";

const Fade = require("react-reveal/Fade");
const Jump = require("react-reveal/Jump");

const Main = () => {
  return (
    <section id="about" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <Fade top>
            <h2 className={s.title}>Hi, I am Evgeniy Berezkin</h2>
          </Fade>
          <Jump>
            <h4 className={s.subtitle}>Front-end Developer</h4>
          </Jump>
          <p className={s.description}>
            I possess strong skills in developing responsive and user-friendly
            web applications and enjoy the process of translating design
            concepts into fully functional and interactive websites.
          </p>
          <p className={s.description}>
            I have experience working with React and TypeScript and constantly
            strive to learn and stay up-to-date with the latest web development
            trends and best practices.
          </p>
          <p className={s.description}>
            You can download my CV to get a more detailed understanding of my
            competence in front-end development.
          </p>
          <div>
            {/*  <button className={s.button}>Download my CV</button> */}
            <a
              href="https://hh.ru/resume/2bb77c5aff0963f02a0039ed1f314f73397563"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={s.button}>More about me</button>
            </a>
          </div>
        </div>
        <div className={s.right}>{<img src={photo} />}</div>
      </div>
    </section>
  );
};

export default Main;
