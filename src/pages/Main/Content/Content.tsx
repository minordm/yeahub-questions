import AccordionButton from "../../../components/AccordionItem/AccordionButton";
import styles from "./Content.module.css";
import PaginationButton from "../../../components/Pagination/PaginationButton";
import NotFound from "../../../components/NotFound/NotFound";
import { useGetQuestionsQuery } from "../../../app/redux/question/api";
import { useAppSelector } from "../../../app/redux/root";
import { useDispatch } from "react-redux";
import { questionActions } from "../../../app/redux/question/slice";
// import { useLocation } from "react-router";

const Content = () => {
  const dispatch = useDispatch();
  const curPage = useAppSelector((state) => state.question.page);
  const search = useAppSelector((state) => state.question.search);
  const complexity = useAppSelector((state) => state.question.complexity);
  const rate = useAppSelector((state) => state.question.rate);
  const specializationId = useAppSelector(
    (state) => state.question.specializationId,
  );
  // const { state: keyword } = useLocation();

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
    // keyword: keyword ?? "",
  });

  const handleResetSearch = () => {
    dispatch(questionActions.reset());
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
            // question?.data.map((question: IQuestionRequest) => (
            question?.data.map((question) => (
              <AccordionButton key={question.id} {...question} />
            ))
          ) : (
            <NotFound onClick={handleResetSearch} />
          )}
        </div>
      </div>
      {question?.data.length > 0 && (
        <PaginationButton
          pageCount={Math.ceil(question.total / question.limit)}
        />
      )}
    </div>
  );
};

export default Content;
