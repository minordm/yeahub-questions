import React from "react";
import AccordionButton from "../AccordionItem/AccordionButton";
import styles from "./Content.module.css";
import PaginationButton from "../Pagination/PaginationButton";

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.questions}>
        <h1 className={styles.title}>Вопросы React, JavaScript</h1>
        <div className={styles["question-container"]}>
          <AccordionButton />
          <AccordionButton />
          <AccordionButton />
          <AccordionButton />
          <AccordionButton />
          <AccordionButton />
          <AccordionButton />
          <AccordionButton />
          <AccordionButton />
        </div>
      </div>
      <PaginationButton />
    </div>
  );
};

export default Content;
