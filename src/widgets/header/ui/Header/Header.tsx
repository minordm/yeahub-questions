import { NavLink, useNavigate } from "react-router";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import { createPortal } from "react-dom";
import Buttons from "./Buttons";
import { FaChevronDown } from "react-icons/fa6";
import cn from "classnames";
import { useModalContext } from "@app/providers";

const Header = () => {
  const { open, setOpen } = useModalContext();
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            <img src="yeahub-logo.svg" alt="" />
            <p>Yeahub</p>
          </div>
          <>
            <button
              className={styles["navigation-modal"]}
              onClick={() =>
                setOpen((prev) => (prev === "navigation" ? "" : "navigation"))
              }
            >
              <p>Подготовка</p>
              <FaChevronDown
                style={{
                  transform:
                    open === "navigation" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {open === "navigation" &&
              createPortal(
                <>
                  <div className={styles.modal}>
                    <Navigation
                      isMobile="mobile"
                      closeModal={() => setOpen("")}
                    />
                  </div>
                </>,
                document.getElementById("portal")!,
              )}
          </>
          <Navigation closeModal={() => setOpen("")} />
        </div>
        <>
          <button
            className={styles["burger-button"]}
            onClick={() =>
              setOpen((prev) => (prev === "burger" ? "" : "burger"))
            }
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
        <Buttons closeModal={() => setOpen("")} />
      </div>
    </header>
  );
};

export default Header;
