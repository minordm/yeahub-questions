import { useAppDispatch, useAppSelector } from "@shared/model";
import styles from "./Content.module.css";
import { createSkeleton } from "@shared/utils/createSkeleton";
import { AccordionButton } from "@features/question";
import NotFound from "@shared/ui/NotFound/NotFound";
import Pagination from "@features/pagination";
import {
  useGetQuestionsQuery,
  questionFiltersActions,
} from "@entities/question";

const Content = ({ openModal }: { openModal: () => void }) => {
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

  if (error) return <p>Не удалось загрузить список вопросов</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.questions}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Вопросы&nbsp;
            {isLoading
              ? createSkeleton(1, 28, 36)
              : question &&
                question?.data &&
                question?.data[0]?.questionSpecializations[0]?.title}
          </h1>
          <button className={styles.sidebar} onClick={openModal}>
            <img
              className={styles["sidebar-icon"]}
              src="/sidebar-mobile-icon.svg"
              alt="иконка фильтра вопросов"
            />
          </button>
        </div>
        <div className={styles["question-container"]}>
          {isLoading ? (
            createSkeleton(10, 72, 277, 8)
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
        <Pagination pageCount={Math.ceil(question.total / question.limit)} />
      )}
    </div>
  );
};

export default Content;
