import { useModalContext } from "@shared/lib/providers/ModalContext";
import { AuthButtons } from "@entities/auth";
import cn from "classnames";
import { NavLink } from "react-router";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

const HeaderAuth = () => {
  const { open, setOpen } = useModalContext();
  return (
    <>
      <>
        <button
          className={styles["burger-button"]}
          onClick={() => setOpen((prev) => (prev === "burger" ? "" : "burger"))}
        >
          <img src="/hamburger-menu-icon.svg" alt="Икнока бургер меню" />
        </button>
        {open === "burger" &&
          createPortal(
            <>
              <div className={styles.modal}>
                <NavLink
                  className={({ isActive }) =>
                    cn(styles["modal-auth-button"], {
                      [styles.active]: isActive,
                    })
                  }
                  to={"/login"}
                  onClick={() => setOpen("")}
                >
                  Вход
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    cn(styles["modal-auth-button"], {
                      [styles.active]: isActive,
                    })
                  }
                  to={"/registr"}
                  onClick={() => setOpen("")}
                >
                  Регистрация
                </NavLink>
              </div>
            </>,
            document.getElementById("portal")!,
          )}
      </>
      <AuthButtons closeModal={() => setOpen("")} />
    </>
  );
};

export default HeaderAuth;
