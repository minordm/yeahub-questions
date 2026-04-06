import ReactPaginate from "react-paginate";
import hellipIcon from "@shared/assets/hellip-icon.svg";
import styles from "./styles.module.css";

interface IPaginationButtonProps {
  setPage: (pageIndex: number) => void;
  pageCount: number;
}

const Pagination = ({ setPage, pageCount }: IPaginationButtonProps) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={(event) => setPage(event.selected + 1)}
      previousLabel="&larr;"
      nextLabel="&rarr;"
      breakLabel={<img src={hellipIcon} />}
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
