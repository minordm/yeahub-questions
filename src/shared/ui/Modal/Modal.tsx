import { createPortal } from "react-dom";
import type { PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

interface IModalProps extends PropsWithChildren {
  isOpen: boolean;
  type: "nav" | "burger";
}

const Modal = ({ isOpen, type, children }: IModalProps) => {
  return (
    isOpen &&
    createPortal(
      <>
        <div
          className={cn(styles.modal, {
            [styles.nav]: type === "nav",
            [styles.burger]: type === "burger",
          })}
        >
          {children}
        </div>
      </>,
      document.getElementById("portal")!,
    )
  );
};

export default Modal;
