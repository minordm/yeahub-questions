import React, { useState } from "react";
import Pagination from "./Pagination";

const PaginationButton = () => {
  const [curPage, setCurPage] = useState(1);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let filterArr = arr;

  const handleNext = () => {
    if (curPage < arr.length) {
      setCurPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (curPage > 1) {
      setCurPage((prev) => prev - 1);
    }
  };

  const setPage = (numberPage) => {
    setCurPage(numberPage);
  };

  return (
    <Pagination
      arr={filterArr}
      next={handleNext}
      prev={handlePrev}
      setPage={setPage}
      curPage={curPage}
    />
  );
};

export default PaginationButton;
