import { useEffect, useState } from "react";
import Content from "./Content/Content";
import SidebarMain from "./Sidebar/Sidebar";
import { createPortal } from "react-dom";

import styles from "./Main.module.css";

const Main = () => {
  const isMobile = false;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Content openModal={() => setOpen(true)} />
      {!isMobile && <SidebarMain />}
      {isMobile &&
        open &&
        createPortal(
          <>
            <div className={styles.overlay} />
            <div className={styles.modal}>
              <button className={styles.button} onClick={() => setOpen(false)}>
                <img src="/close-sidebar.svg" alt="кнопка закрытия сайдбара" />
              </button>
              <SidebarMain closeModal={() => setOpen(false)} />
            </div>
          </>,
          document.getElementById("portal")!,
        )}
    </>
  );
};

export default Main;
