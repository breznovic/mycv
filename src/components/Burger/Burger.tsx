import s from "./Burger.module.css";

const Burger = () => {
  return (
    <>
      <label>
        <input type="checkbox" />
        <span className={s.menu}>
          <span className={s.burger}></span>
        </span>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">My skills</a>
          </li>
          <li>
            <a href="#works">My Apps</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </label>
    </>
  );
};

export default Burger;
