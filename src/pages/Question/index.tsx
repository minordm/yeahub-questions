import Content from "./Content/Content";
import SidebarQuestionDetail from "./Sidebar/Sidebar";
import { createPortal } from "react-dom";

import styles from "./Question.module.css";
import { useEffect, useState } from "react";
import { useGetQuestionByIdQuery } from "../../app/redux/questionFilters/api";
import { useParams } from "react-router";
import { skipToken } from "@reduxjs/toolkit/query";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Question = () => {
  const isMobile = false;
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const {
    data: question,
    error,
    isLoading,
  } = useGetQuestionByIdQuery(id ? Number(id) : skipToken);

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

  if (error) return <NotFoundPage style={{ height: "calc(-460px + 100vh)" }} />;

  return (
    <>
      <Content question={question} isLoading={isLoading} setOpen={setOpen} />
      {!isMobile && <SidebarQuestionDetail question={question} />}
      {isMobile &&
        open &&
        createPortal(
          <>
            <div className={styles.overlay} />
            <div className={styles.modal}>
              <button
                style={{ marginBottom: "-36px" }}
                className={styles.button}
                onClick={() => setOpen(false)}
              >
                <img src="/close-sidebar.svg" alt="кнопка закрытия сайдбара" />
              </button>
              <SidebarQuestionDetail question={question} />
            </div>
          </>,
          document.getElementById("portal")!,
        )}
    </>
  );
};

export default Question;
