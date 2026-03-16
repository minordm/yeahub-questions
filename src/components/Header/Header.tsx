import cn from "classnames";
import { NavLink, useNavigate } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.wrapper}>
      <div className={styles.navigation}>
        <img
          className={styles.logo}
          onClick={() => navigate("/")}
          src="/logo.svg"
          alt="Икнока yeahub"
        />
        <nav className={styles["navigation-buttons"]}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              cn(styles.links, { [styles.active]: isActive })
            }
          >
            <p>База&nbsp;вопросов</p>
          </NavLink>
          <NavLink
            to={"/trainer"}
            className={({ isActive }) =>
              cn(styles.links, { [styles.active]: isActive })
            }
          >
            <p>Тренажер</p>
          </NavLink>
          <NavLink
            to={"/collections"}
            className={({ isActive }) =>
              cn(styles.links, { [styles.active]: isActive })
            }
          >
            <p>Собеседования</p>
          </NavLink>
          <NavLink
            to={"/skills"}
            className={({ isActive }) =>
              cn(styles.links, { [styles.active]: isActive })
            }
          >
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
