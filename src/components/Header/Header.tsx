import { useNavigate } from "react-router";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import { createPortal } from "react-dom";
import { useState } from "react";
import Buttons from "./Buttons";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  const isMobile = false;
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
          {isMobile ? (
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
          ) : (
            <Navigation />
          )}
        </div>
        {isMobile ? (
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
                    <Buttons
                      closeModal={() => setShowModal("")}
                      isMobile={isMobile}
                    />
                  </div>
                </>,
                document.getElementById("portal")!,
              )}
          </>
        ) : (
          <Buttons />
        )}
      </div>
    </header>
  );
};

export default Header;
