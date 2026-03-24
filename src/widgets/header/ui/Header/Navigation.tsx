import { NavLink } from "react-router";
import cn from "classnames";

import styles from "./Header.module.css";

const Navigation = ({
  isMobile,
  closeModal,
}: {
  isMobile?: string;
  closeModal?: () => void;
}) => {
  return (
    <nav
      className={cn(styles["navigation-buttons"], {
        [styles.mobile]: isMobile,
      })}
    >
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          cn(styles.links, { [styles.active]: isActive })
        }
        onClick={closeModal}
      >
        <p>База&nbsp;вопросов</p>
      </NavLink>
      <NavLink
        to={"/trainer"}
        className={({ isActive }) =>
          cn(styles.links, { [styles.active]: isActive })
        }
        onClick={closeModal}
      >
        <p>Тренажер</p>
      </NavLink>
      <NavLink
        to={"/collections"}
        className={({ isActive }) =>
          cn(styles.links, { [styles.active]: isActive })
        }
        onClick={closeModal}
      >
        <p>Собеседования</p>
      </NavLink>
      <NavLink
        to={"/skills"}
        className={({ isActive }) =>
          cn(styles.links, { [styles.active]: isActive })
        }
        onClick={closeModal}
      >
        <p>Навыки&nbsp;(hh)</p>
      </NavLink>
    </nav>
  );
};

export default Navigation;
