import HeaderNavDesktop from "./HeaderNavDesktop/HeaderNavDesktop";
import { useModalContext } from "@shared/lib/providers/ModalContext";
import { FaChevronDown } from "react-icons/fa6";
import Modal from "@shared/ui/Modal/Modal";
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
        <Modal isOpen={open === "navigation"} type="nav">
          <HeaderNavDesktop isMobile="mobile" closeModal={() => setOpen("")} />
        </Modal>
      </>

      <HeaderNavDesktop closeModal={() => setOpen("")} />
    </>
  );
};

export default HeaderNav;
