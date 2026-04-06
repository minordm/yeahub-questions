import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import Pagination from "@shared/ui/Pagination/Pagination";
import {
  questionFiltersActions,
  useGetQuestionsQuery,
} from "@entities/question";

const QuestionPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const curPage = useAppSelector((state) => state.questionFilters.page);
  const search = useAppSelector((state) => state.questionFilters.search);
  const complexity = useAppSelector(
    (state) => state.questionFilters.complexity,
  );
  const rate = useAppSelector((state) => state.questionFilters.rate);
  const specializationId = useAppSelector(
    (state) => state.questionFilters.specializationId,
  );
  const skills = useAppSelector((state) => state.questionFilters.skill);

  const { data: questions } = useGetQuestionsQuery({
    page: curPage,
    title: search,
    complexity,
    rate,
    specializationId,
    skills,
  });

  const setPage = (numberPage: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(numberPage);
    dispatch(questionFiltersActions.updatePage(numberPage));
  };

  return (
    <Pagination
      pageCount={Math.ceil((questions?.total ?? 1) / (questions?.limit ?? 1))}
      setPage={setPage}
    />
  );
};

export default QuestionPagination;
