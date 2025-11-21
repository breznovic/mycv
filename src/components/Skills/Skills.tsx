import { skillsData } from "../../lib/SkillsData";
import Skill from "./Skill/Skill";
import s from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>What I offer</h5>
          <h2 className={s.title}>My skills</h2>
        </div>
        <div className={s.cards}>
          {skillsData.map((s) => (
            <Skill
              key={s.id}
              title={s.title}
              icon={s.icon}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
