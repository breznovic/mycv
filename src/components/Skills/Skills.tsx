import classes from "./skills.module.css";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5 className={classes.subtitle}>What I offer</h5>
          <h2 className={classes.title}>My skills</h2>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.top}>
              <BsFiletypeHtml className={classes.icon} />
              <span>HTML/CSS</span>
            </div>
            <div className={classes.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.top}>
              <DiJsBadge className={classes.icon} />
              <span>JavaScript</span>
            </div>
            <div className={classes.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.top}>
              <FaReact className={classes.icon} />
              <span>React</span>
            </div>
            <div className={classes.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?{" "}
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.top}>
              <SiTypescript className={classes.icon} />
              <span>TypeScript</span>
            </div>
            <div className={classes.bottom}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nostrum officia quaerat hic rem aut tenetur pariatur
              recusandae a id facere ducimus eius totam libero ut, veniam
              accusamus earum tempore?
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.top}>
              <SiRedux className={classes.icon} />
              <span>Redux Toolkit</span>
            </div>
            <div className={classes.bottom}>
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
