import { type FC } from "react";
import ReactPaginate from "react-paginate";
// import cn from "classnames";
import styles from "./Pagination.module.css";

interface IPaginationProps {
  // arr: number[];
  // next: () => void;
  // prev: () => void;
  setPage: (pageIndex: number) => void;
  // curPage: number;
  pageCount: number;
}

const Pagination: FC<IPaginationProps> = ({
  // arr,
  // next,
  // prev,
  setPage,
  // curPage,
  pageCount,
}) => {
  return (
    // <div className={styles.wrapper}>
    //   <button
    //     className={styles.arrow}
    //     onClick={prev}
    //     disabled={curPage === 1 ? true : false}
    //   >
    //     &larr;
    //   </button>
    //   {arr.map((i) => (
    //     <button
    //       key={i}
    //       className={cn(styles["page-number"], {
    //         [styles.active]: i === curPage,
    //       })}
    //       onClick={() => setPage(i)}
    //     >
    //       {i}
    //     </button>
    //   ))}
    //   <button
    //     className={styles.arrow}
    //     onClick={next}
    //     disabled={curPage === arr.length ? true : false}
    //   >
    //     &rarr;
    //   </button>
    // </div>
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      onPageChange={(event) => setPage(event.selected + 1)}
      previousLabel="&larr;"
      nextLabel="&rarr;"
      breakLabel={<img src="/hellip-icon.svg" />}
      className={styles.wrapper}
      activeLinkClassName={styles.active}
      breakClassName={styles.break}
      disabledClassName={styles.disabled}
      nextClassName={styles.arrow}
      previousClassName={styles.arrow}
    />
  );
};

export default Pagination;
