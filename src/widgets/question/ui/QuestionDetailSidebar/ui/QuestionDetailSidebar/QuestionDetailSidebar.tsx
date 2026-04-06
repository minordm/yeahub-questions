import { useEffect } from "react";
import useMediaQuery from "@shared/lib/hooks/useMediaQuery";
import { createPortal } from "react-dom";
import SidebarUI from "../SidebarUI/SidebarUI";
import { Navigate, useParams } from "react-router";
import { useGetQuestionByIdQuery } from "@entities/question";
import { skipToken } from "@reduxjs/toolkit/query";
import closeSidebarIcon from "@shared/assets/close-sidebar.svg";
import styles from "./styles.module.css";

interface ISidebarProps {
  setOpen: (isOpen: boolean) => void;
  open: boolean;
}

const QuestionDetailSidebar = ({ setOpen, open }: ISidebarProps) => {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const { id } = useParams();
  const {
    data: question,
    error,
    isLoading,
  } = useGetQuestionByIdQuery(id ? Number(id) : skipToken);

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

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <Navigate to={"*"} />;

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
              <img src={closeSidebarIcon} alt="кнопка закрытия сайдбара" />
            </button>
            <SidebarUI question={question} />
          </div>
        </>,
        document.getElementById("portal")!,
      )
  );
};

export default QuestionDetailSidebar;
