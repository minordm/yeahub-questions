import { useState, type FC } from "react";
import Pagination from "./ui/Pagination";
import { useAppDispatch } from "../../app/redux/root";
import { questionFiltersActions } from "../../app/redux/questionFilters/slice";

interface IPaginationButtonProps {
  pageCount: number;
}

const PaginationButton: FC<IPaginationButtonProps> = ({ pageCount }) => {
  const [_, setCurPage] = useState(1);
  const dispatch = useAppDispatch();

  const setPage = (numberPage: number) => {
    setCurPage(numberPage);
    dispatch(questionFiltersActions.updatePage(numberPage));
  };

  return <Pagination pageCount={pageCount} setPage={setPage} />;
};

export default PaginationButton;
