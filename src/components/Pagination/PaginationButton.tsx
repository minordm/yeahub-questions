import type { Dispatch, FC, SetStateAction } from "react";
import Pagination from "./Pagination";

interface IPaginationButtonProps {
  // arr: number[];
  // curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

const PaginationButton: FC<IPaginationButtonProps> = ({
  // arr,
  // curPage,
  setCurPage,
  pageCount,
}) => {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const filterArr = arr;

  // const handleNext = () => {
  //   if (curPage < arr.length) {
  //     setCurPage((prev) => prev + 1);
  //   }
  // };

  // const handlePrev = () => {
  //   if (curPage > 1) {
  //     setCurPage((prev) => prev - 1);
  //   }
  // };

  const setPage = (numberPage: number) => {
    setCurPage(numberPage);
  };

  return (
    <Pagination
      // arr={filterArr}
      pageCount={pageCount}
      // next={handleNext}
      // prev={handlePrev}
      setPage={setPage}
      // curPage={curPage}
    />
  );
};

export default PaginationButton;
