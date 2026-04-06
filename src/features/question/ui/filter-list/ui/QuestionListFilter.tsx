import {
  QuestionAccordion,
  QuestionContent,
  questionFiltersActions,
  useGetQuestionsQuery,
} from "@entities/question";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";

const QuestionListFilter = ({ openModal }: { openModal: () => void }) => {
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

  const {
    data: questions,
    error,
    isLoading,
  } = useGetQuestionsQuery({
    page: curPage,
    title: search,
    complexity,
    rate,
    specializationId,
    skills,
  });

  const handleResetSearch = () => {
    dispatch(questionFiltersActions.reset());
  };

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <QuestionContent
      questions={questions}
      handleResetSearch={handleResetSearch}
      isLoading={isLoading}
      openModal={openModal}
      renderQuestion={(question) => (
        <QuestionAccordion key={question.id} {...question} />
      )}
    />
  );
};

export default QuestionListFilter;
