import s from "./Burger.module.css";

type BurgerProps = {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  onClose: () => void;
};

const Burger = ({ isOpen, onToggle, onClose }: BurgerProps) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(e.target.checked);
  };

  const handleNavClick = () => {
    onClose();
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isOpen}
          onChange={handleCheckboxChange}
        />
        <span className={s.menu}>
          <span className={s.burger}></span>
        </span>
        <ul>
          <li>
            <a href="#" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick}>
              My skills
            </a>
          </li>
          <li>
            <a href="#works" onClick={handleNavClick}>
              My Apps
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={handleNavClick}>
              Contacts
            </a>
          </li>
        </ul>
      </label>
    </>
  );
};

export default Burger;
