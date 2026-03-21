import { NavLink, useNavigate } from "react-router";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import { createPortal } from "react-dom";
import { useState } from "react";
import Buttons from "./Buttons";
import { FaChevronDown } from "react-icons/fa6";
import cn from "classnames";

const Header = () => {
  const [showModal, setShowModal] = useState<"navigation" | "burger" | "">("");
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
                setShowModal((prev) =>
                  prev === "navigation" ? "" : "navigation",
                )
              }
            >
              <p>Подготовка</p>
              <FaChevronDown
                style={{
                  transform:
                    showModal === "navigation"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              />
            </button>
            {showModal === "navigation" &&
              createPortal(
                <>
                  <div className={styles.modal}>
                    <Navigation
                      isMobile="mobile"
                      closeModal={() => setShowModal("")}
                    />
                  </div>
                </>,
                document.getElementById("portal")!,
              )}
          </>
          <Navigation closeModal={() => setShowModal("")} />
        </div>
        <>
          <button
            className={styles["burger-button"]}
            onClick={() =>
              setShowModal((prev) => (prev === "burger" ? "" : "burger"))
            }
          >
            <img src="/hamburger-menu-icon.svg" alt="Икнока бургер меню" />
          </button>
          {showModal === "burger" &&
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
                    onClick={() => setShowModal("")}
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
                    onClick={() => setShowModal("")}
                  >
                    Регистрация
                  </NavLink>
                </div>
              </>,
              document.getElementById("portal")!,
            )}
        </>
        <Buttons closeModal={() => setShowModal("")} />
      </div>
    </header>
  );
};

export default Header;
