import { ReactElement } from "react";
import s from "./ContactCard.module.css";
import useIntersectionObserver from "../../../lib/useIntersectionObserver";

const ContactCard = (props: {
  icon: ReactElement<string, string>;
  title: string;
  text: string;
  href: string;
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={`${s.card} ${isVisible ? s.visible : ""}`}>
      <div className={s.cardInfo}>
        <div className={s.icon}>{props.icon}</div>
        <div className={s.cardData}>
          <a href={props.href} className={s.cardText}>
            <span>{props.title}:</span>
            {props.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
