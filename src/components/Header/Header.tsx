import cn from "classnames";
import styles from "./Header.module.css";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.navigation}>
        <img src="/logo.svg" alt="Икнока yeahub" />
        <nav className={styles["navigation-buttons"]}>
          <NavLink to={"/"} className={cn(styles.links, styles.active)}>
            <p>База&nbsp;вопросов</p>
          </NavLink>
          <NavLink to={"/"} className={styles.links}>
            <p>Тренажер</p>
          </NavLink>
          <NavLink to={"/"} className={styles.links}>
            {/* <p>Материалы</p> */}
            <p>Собеседования</p>
          </NavLink>
          <NavLink to={"/"} className={styles.links}>
            <p>Навыки&nbsp;(hh)</p>
          </NavLink>
        </nav>
      </div>
      <div className={styles["auth-buttons"]}>
        <button className={styles.small}>Вход</button>
        <button className={styles.big}>Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
