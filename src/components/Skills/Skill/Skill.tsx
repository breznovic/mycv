import { ReactElement } from "react";
import s from "./Skill.module.css";
import useIntersectionObserver from "../../../lib/useIntersectionObserver";

const Skill = (props: {
  title: string;
  icon: ReactElement<string, string> | undefined;
  description: string;
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={`${s.card} ${isVisible ? s.visible : ""}`}>
      <div className={s.top}>
        {props.icon}
        <span>{props.title}</span>
      </div>
      <div className={s.bottom}>{props.description}</div>
    </div>
  );
};

export default Skill;
