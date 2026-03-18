import AccordionButton from "../../../components/AccordionItem/AccordionButton";
import styles from "./Content.module.css";
import PaginationButton from "../../../shared/Pagination/PaginationButton";
import NotFound from "../../../components/NotFound/NotFound";
import { useGetQuestionsQuery } from "../../../app/redux/questionFilters/api";
import { useAppSelector } from "../../../app/redux/root";
import { useDispatch } from "react-redux";
import { questionFiltersActions } from "../../../app/redux/questionFilters/slice";

const Content = () => {
  const dispatch = useDispatch();
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
    data: question,
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

  if (error) return <p>Ошибка</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.questions}>
        <h1 className={styles.title}>
          Вопросы&nbsp;
          {question &&
            question?.data &&
            question?.data[0]?.questionSpecializations[0]?.title}
        </h1>
        <div className={styles["question-container"]}>
          {isLoading ? (
            <>Загрузка...</>
          ) : question?.data.length ? (
            question.data.map((question) => (
              <AccordionButton key={question.id} {...question} />
            ))
          ) : (
            <NotFound onClick={handleResetSearch} />
          )}
        </div>
      </div>
      {!isLoading && question?.data && question.data.length > 0 && (
        <PaginationButton
          pageCount={Math.ceil(question.total / question.limit)}
        />
      )}
    </div>
  );
};

export default Content;
