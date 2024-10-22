import Burger from "../Burger/Burger";
import s from "./Nav.module.css";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.name}>
          <h1 onClick={scrollToTop}>Evgeniy Berezkin</h1>
        </div>
        <div className={s.menu}>
          <ul className={s.list}>
            <li className={s.listItem}>
              <a onClick={scrollToTop} href="#">
                Home
              </a>
            </li>
            <li className={s.listItem}>
              <a href="#skills">My skills</a>
            </li>
            <li className={s.listItem}>
              <a href="#works">My Apps</a>
            </li>
            <li className={s.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.hide}>
        <Burger />
      </div>
    </div>
  );
};

export default Navbar;