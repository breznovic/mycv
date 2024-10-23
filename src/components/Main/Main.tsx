import s from "./Main.module.css";
import photo from "../../assets/images/myPhoto.jpg";

const Main = () => {
  return (
    <section id="about" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <h2 className={s.title}>Hi, I am Evgeniy Berezkin</h2>
          <h4 className={s.subtitle}>Front-end Developer</h4>
          <p>
            I possess strong skills in developing responsive and user-friendly
            web applications and enjoy the process of translating design
            concepts into fully functional and interactive websites.
          </p>
          <p>
            I have experience working with React and TypeScript and constantly
            strive to learn and stay up-to-date with the latest web development
            trends and best practices.
          </p>

          <p>
            By clicking on the link below, you can get a more detailed overview
            of my skills.
          </p>
          <div className={s.buttonContainer}>
            <a href="#contacts">
              <button className={s.button}>Contact me</button>
            </a>
          </div>
        </div>
        <div className={s.photo}>{<img src={photo} />}</div>
      </div>
    </section>
  );
};

export default Main;
