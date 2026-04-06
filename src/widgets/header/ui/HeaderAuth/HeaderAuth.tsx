import { useModalContext } from "@shared/lib/providers/ModalContext";
import cn from "classnames";
import { NavLink } from "react-router";
import AuthButtons from "../AuthButtons/AuthButtons";
import Modal from "@shared/ui/Modal/Modal";
import burgerIcon from "@widgets/Header/assets/hamburger-menu-icon.svg";
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
          <img src={burgerIcon} alt="Икнока бургер меню" />
        </button>
        <Modal isOpen={open === "burger"} type="burger">
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
        </Modal>
      </>
      <AuthButtons closeModal={() => setOpen("")} />
    </>
  );
};

export default HeaderAuth;
