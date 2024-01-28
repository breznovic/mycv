import s from "./skills.module.css";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";

const Rotate = require("react-reveal/Rotate");

const Skills = () => {
  return (
    <section id="skills" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>What I offer</h5>
          <h2 className={s.title}>My skills</h2>
        </div>
        <div className={s.cards}>
          <Rotate top left>
            <div className={s.card}>
              <div className={s.top}>
                <BsFiletypeHtml className={s.icon} />
                <span>HTML/CSS</span>
              </div>
              <div className={s.bottom}>
                <ul>
                  <li>Proficient in writing semantic and structured HTML code</li>
                  <li>
                    Experience in responsive web design using media queries,
                    flexbox, and grid models
                  </li>
                  <li>
                    Skilled in developing apps with UI frameworks like MUI and
                    CSS preprocessors like Sass
                  </li>
                </ul>
              </div>
            </div>
          </Rotate>
          <Rotate top>
            <div className={s.card}>
              <div className={s.top}>
                <DiJsBadge className={s.icon} />
                <span>JavaScript</span>
              </div>
              <div className={s.bottom}>
                <ul>
                  <li>
                    I have a strong understanding of core language concepts and
                    features
                  </li>
                  <li>
                    Skilled in working with asynchronous programming to handle
                    data fetching
                  </li>
                  <li>
                    Proficient in using debugging tools to fix issues in code
                  </li>
                </ul>
              </div>
            </div>
          </Rotate>
          <Rotate top right>
            <div className={s.card}>
              <div className={s.top}>
                <FaReact className={s.icon} />
                <span>React</span>
              </div>
              <div className={s.bottom}>
                <ul>
                  <li>
                    Extensive experience in developing scalable and reusable
                    components
                  </li>
                  <li>
                    Skilled in utilizing React hooks for managing component
                    state
                  </li>
                  <li>
                    Familiarity with React Router for creating dynamic and
                    navigable SPA
                  </li>
                </ul>
              </div>
            </div>
          </Rotate>
          <Rotate bottom left>
            <div className={s.card}>
              <div className={s.top}>
                <SiTypescript className={s.icon} />
                <span>TypeScript</span>
              </div>
              <div className={s.bottom}>
                <ul>
                  <li>Strong understanding of type system and features</li>
                  <li>
                    Extensive experience in configuration for managing code
                    organization
                  </li>
                  <li>
                    Knowledgeable in leveraging TypeScript's features such as
                    generics and conditional types
                  </li>
                </ul>
              </div>
            </div>
          </Rotate>
          <Rotate bottom right>
            <div className={s.card}>
              <div className={s.top}>
                <SiRedux className={s.icon} />
                <span>Redux Toolkit</span>
              </div>
              <div className={s.bottom}>
                <ul>
                  <li>
                    Proficient in building scalable and maintainable
                    applications
                  </li>
                  <li>
                    Skilled in defining Redux state and reducers in a concise
                    and modular manner
                  </li>
                  <li>
                    Experience in integrating RTK with components for efficient
                    state management in UI hierarchies
                  </li>
                </ul>
              </div>
            </div>
          </Rotate>
        </div>
      </div>
    </section>
  );
};

export default Skills;
