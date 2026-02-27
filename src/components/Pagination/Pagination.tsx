import React from "react";
import cn from "classnames";
import styles from "./Pagination.module.css";

const Pagination = ({ arr, next, prev, setPage, curPage }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.arrow}
        onClick={prev}
        disabled={curPage === 1 ? true : false}
      >
        &larr;
      </button>
      {arr.map((i) => (
        <button
          key={i}
          className={cn(styles["page-number"], {
            [styles.active]: i === curPage,
          })}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      ))}
      <button
        className={styles.arrow}
        onClick={next}
        disabled={curPage === arr.length ? true : false}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
