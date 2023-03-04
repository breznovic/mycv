import React from "react";
import classes from "./nav.module.css";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 onClick={scrollToTop}>Evgeniy Berezkin</h2>
        </div>
        <div className={classes.right}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a onClick={scrollToTop} href="#">
                Home
              </a>
            </li>
            <li className={classes.listItem}>
              <a href="#about">About Me</a>
            </li>
            <li className={classes.listItem}>
              <a href="#skills">My skills</a>
            </li>
            <li className={classes.listItem}>
              <a href="#works">My works</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
