import { useEffect } from "react";
import useMediaQuery from "@shared/hooks/useMediaQuery";
import { createPortal } from "react-dom";
import SidebarUI from "./ui/Sidebar";
import styles from "./styles.module.css";
import type { IQuestion } from "@entities/question";

interface ISidebarProps {
  question?: IQuestion;
  setOpen: (isOpen: boolean) => void;
  open: boolean;
}

const Sidebar = ({ question, setOpen, open }: ISidebarProps) => {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open && !isMobile) {
      setOpen(false);
    }
  }, [isMobile, open, setOpen]);

  return !isMobile ? (
    <SidebarUI question={question} />
  ) : (
    open &&
      createPortal(
        <>
          <div className={styles.overlay} onClick={() => setOpen(false)} />
          <div className={styles.modal}>
            <button
              style={{ marginBottom: "-36px" }}
              className={styles.button}
              onClick={() => setOpen(false)}
            >
              <img src="/close-sidebar.svg" alt="кнопка закрытия сайдбара" />
            </button>
            <SidebarUI question={question} />
          </div>
        </>,
        document.getElementById("portal")!,
      )
  );
};

export default Sidebar;
