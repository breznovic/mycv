import s from "./Apps.module.css";
import thorvald from "../../assets/thorvaldClicker.png";
import todolist from "../../assets/todolist.png";
import langish from "../../assets/langish.png";
import { Slider } from "./Slider";

const Works = () => {
  return (
    <section id="works" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>My apps examples</h5>
          <h2 className={s.title}>My apps</h2>
          <div className={s.worksContainer}>
    {/*         <Slider />

            <h2 className={s.appTitle}>Thorvald clicker game</h2>
            <p className={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              distinctio molestiae, iste sapiente earum porro deleniti adipisci,
              provident voluptates unde, ipsam quam! Ad, id asperiores. Quasi
              quam explicabo maiores quisquam!
            </p>
            <div className={s.bottom}>
              <img src={thorvald} className={s.img} />
            </div>

            <h2 className={s.appTitle}>Todolist</h2>
            <p className={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              distinctio molestiae, iste sapiente earum porro deleniti adipisci,
              provident voluptates unde, ipsam quam! Ad, id asperiores. Quasi
              quam explicabo maiores quisquam!
            </p>
            <div className={s.bottom}>
              <img src={todolist} className={s.img} />
            </div>

            <h2 className={s.appTitle}>Langish</h2>
            <p className={s.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              distinctio molestiae, iste sapiente earum porro deleniti adipisci,
              provident voluptates unde, ipsam quam! Ad, id asperiores. Quasi
              quam explicabo maiores quisquam!
            </p>
            <div className={s.bottom}>
              <img src={langish} className={s.img} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
