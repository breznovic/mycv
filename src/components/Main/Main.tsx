import senor from "../../assets/senor.webp";
import s from "./main.module.css";

const Main = () => {
  return (
    <section id="about" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <h2 className={s.title}>Hi, I am Evgeniy Berezkin</h2>
          <h4 className={s.subtitle}>Front-end Developer</h4>
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
            <button className={s.button}>Download my CV</button>
          </div>
        </div>
        <div className={s.right}>
          <img src={senor} />
        </div>
      </div>
    </section>
  );
};

export default Main;
