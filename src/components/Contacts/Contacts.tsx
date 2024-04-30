import s from "./contacts.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Fade = require("react-reveal/Fade");

const Contacts = () => {
  return (
    <section id="contacts" className={s.container}>
      <Fade left>
        <div className={s.wrapper}>
          <div className={s.titles}>
            <h5 className={s.subtitle}>Where to find me</h5>
            <h2 className={s.title}>Contacts</h2>
          </div>
          <div className={s.sides}>
            <div className={s.cards}>
              <div className={s.card}>
                <div className={s.cardInfo}>
                  <div className={s.icon}>
                    <FaTelegramPlane />
                  </div>
                  <div className={s.cardData}>
                    <span>Telegram:</span>
                    <a href="https://t.me/breznovic" className={s.cardText}>
                      @breznovic
                    </a>
                  </div>
                </div>
              </div>
              <div className={s.card}>
                <div className={s.cardInfo}>
                  <div className={s.icon}>
                    <IoMailUnreadOutline />
                  </div>
                  <div className={s.cardData}>
                    <span>Email:</span>
                    <a href="mailto:breznovic@mail.ru" className={s.cardText}>
                      breznovic@mail.ru
                    </a>
                  </div>
                </div>
              </div>
              <div className={s.card}>
                <div className={s.cardInfo}>
                  <div className={s.icon}>
                    <FaGithub />
                  </div>
                  <div className={s.cardData}>
                    <span>GitHub:</span>
                    <a
                      href="https://github.com/breznovic"
                      className={s.cardText}
                    >
                      breznovic
                    </a>
                  </div>
                </div>
              </div>
              <div className={s.card}>
                <div className={s.cardInfo}>
                  <div className={s.icon}>
                    <IoLocationOutline />
                  </div>
                  <div className={s.cardData}>
                    <span>Location:</span>
                    <span className={s.cardText}>Moscow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Contacts;
