import { ReactElement, useRef, useEffect, useState } from "react";
import s from "./Skill.module.css";

const Skill = (props: {
  title: string;
  icon: ReactElement<string, string> | undefined;
  description: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`${s.card} ${isVisible ? s.visible : ""}`}>
      <div className={s.top}>
        {props.icon}
        <span>{props.title}</span>
      </div>
      <div className={s.bottom}>{props.description}</div>
    </div>
  );
};

export default Skill;
