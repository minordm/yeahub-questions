import useMediaQuery from "@shared/hooks/useMediaQuery";
import SidebarMain from "./ui/Sidebar";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";

interface ISidebarProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ open, setOpen }: ISidebarProps) => {
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
              <img src="/close-sidebar.svg" alt="кнопка закрытия сайдбара" />
            </button>
            <SidebarMain closeModal={() => setOpen(false)} />
          </div>
        </>,
        document.getElementById("portal")!,
      )
  );
};

export default Sidebar;
