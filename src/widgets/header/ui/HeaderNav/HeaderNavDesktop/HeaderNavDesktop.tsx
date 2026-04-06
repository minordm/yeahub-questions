import { NavLink, useLocation } from "react-router";
import cn from "classnames";

import styles from "./styles.module.css";

const HeaderNavDesktop = ({
  isMobile,
  closeModal,
}: {
  isMobile?: string;
  closeModal?: () => void;
}) => {
  const location = useLocation();
  return (
    <nav
      className={cn(styles["navigation-buttons"], {
        [styles.mobile]: isMobile,
      })}
    >
      <NavLink
        to={"/questions"}
        className={({ isActive }) =>
          cn(styles.links, { [styles.active]: isActive })
        }
        onClick={closeModal}
      >
        <p>База&nbsp;вопросов</p>
      </NavLink>
      <NavLink
        to={"/quiz/new"}
        className={() => {
          const isQuizActive = location.pathname.startsWith("/quiz");
          return cn(styles.links, { [styles.active]: isQuizActive });
        }}
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

export default HeaderNavDesktop;
