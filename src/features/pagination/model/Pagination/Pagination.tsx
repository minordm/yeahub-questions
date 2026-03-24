import { useState, type FC } from "react";
import { useAppDispatch } from "@shared/model";
import PaginationButton from "@features/pagination/ui";
import { questionFiltersActions } from "@entities/question/model/slice";

interface IPaginationProps {
  pageCount: number;
}

const Pagination: FC<IPaginationProps> = ({ pageCount }) => {
  const [curPage, setCurPage] = useState(1);
  const dispatch = useAppDispatch();

  const setPage = (numberPage: number) => {
    window.scrollTo(0, 0);
    setCurPage(numberPage);
    dispatch(questionFiltersActions.updatePage(numberPage));
  };

  return <PaginationButton pageCount={pageCount} setPage={setPage} />;
};

export default Pagination;
