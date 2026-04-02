import HeaderNavDesktop from "./HeaderNavDesktop/HeaderNavDesktop";
import { useModalContext } from "@shared/lib/providers/ModalContext";
import { createPortal } from "react-dom";

import { FaChevronDown } from "react-icons/fa6";
import styles from "./styles.module.css";

const HeaderNav = () => {
  const { open, setOpen } = useModalContext();
  return (
    <>
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
                <HeaderNavDesktop
                  isMobile="mobile"
                  closeModal={() => setOpen("")}
                />
              </div>
            </>,
            document.getElementById("portal")!,
          )}
      </>

      <HeaderNavDesktop closeModal={() => setOpen("")} />
    </>
  );
};

export default HeaderNav;
