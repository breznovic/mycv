import s from "./Apps.module.css";
import Slider from "./Slider/Slider";

const Works = () => {
  return (
    <section id="works" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>My apps examples</h5>
          <h2 className={s.title}>My apps</h2>
          <div className={s.slider}>
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
