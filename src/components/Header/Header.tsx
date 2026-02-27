import cn from "classnames";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.navigation}>
        <img src="/logo.svg" alt="Икнока yeahub" />
        <nav className={styles["navigation-buttons"]}>
          <a className={cn(styles.links, styles.active)}>
            <p>База&nbsp;вопросов</p>
          </a>
          <a className={styles.links}>
            <p>Тренажер</p>
          </a>
          <a className={styles.links}>
            <p>Материалы</p>
          </a>
          <a className={styles.links}>
            <p>Навыки&nbsp;(hh)</p>
          </a>
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
