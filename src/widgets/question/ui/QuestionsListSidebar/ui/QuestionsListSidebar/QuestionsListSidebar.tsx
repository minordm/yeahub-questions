import useMediaQuery from "@shared/lib/hooks/useMediaQuery";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import SidebarMain from "../SidebarMain/SidebarMain";
import closeSidebarIcon from "@shared/assets/close-sidebar.svg";
import styles from "./styles.module.css";

interface ISidebarProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const QuestionsListSidebar = ({ open, setOpen }: ISidebarProps) => {
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
    <SidebarMain />
  ) : (
    open &&
      createPortal(
        <>
          <div className={styles.overlay} onClick={() => setOpen(false)} />
          <div className={styles.modal}>
            <button className={styles.button} onClick={() => setOpen(false)}>
              <img src={closeSidebarIcon} alt="кнопка закрытия сайдбара" />
            </button>
            <SidebarMain closeModal={() => setOpen(false)} />
          </div>
        </>,
        document.getElementById("portal")!,
      )
  );
};

export default QuestionsListSidebar;
