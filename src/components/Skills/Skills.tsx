import s from "./skills.module.css";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>What I offer</h5>
          <h2 className={s.title}>My skills</h2>
        </div>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.top}>
              <BsFiletypeHtml className={s.icon} />
              <span>HTML/CSS</span>
            </div>
            <div className={s.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?
            </div>
          </div>
          <div className={s.card}>
            <div className={s.top}>
              <DiJsBadge className={s.icon} />
              <span>JavaScript</span>
            </div>
            <div className={s.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?
            </div>
          </div>
          <div className={s.card}>
            <div className={s.top}>
              <FaReact className={s.icon} />
              <span>React</span>
            </div>
            <div className={s.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?{" "}
            </div>
          </div>
          <div className={s.card}>
            <div className={s.top}>
              <SiTypescript className={s.icon} />
              <span>TypeScript</span>
            </div>
            <div className={s.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?
            </div>
          </div>
          <div className={s.card}>
            <div className={s.top}>
              <SiRedux className={s.icon} />
              <span>Redux Toolkit</span>
            </div>
            <div className={s.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
