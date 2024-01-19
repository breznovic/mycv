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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            asperiores et? Neque iusto iure, perspiciatis excepturi similique
            assumenda modi laboriosam reiciendis deserunt cupiditate facilis
            inventore minima tempora quidem ullam laborum!
          </p>
        </div>
        <div className={s.right}>
          <img src={senor} />
        </div>
      </div>
    </section>
  );
};

export default Main;
