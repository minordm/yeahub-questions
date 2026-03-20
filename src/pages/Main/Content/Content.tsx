import AccordionButton from "../../../components/AccordionItem/AccordionButton";
import styles from "./Content.module.css";
import PaginationButton from "../../../shared/Pagination/PaginationButton";
import NotFound from "../../../components/NotFound/NotFound";
import { useGetQuestionsQuery } from "../../../app/redux/questionFilters/api";
import { useAppSelector } from "../../../app/redux/root";
import { useDispatch } from "react-redux";
import { questionFiltersActions } from "../../../app/redux/questionFilters/slice";
import Skeleton from "../../../shared/Skeleton/Skeleton";

const Content = ({ openModal }: { openModal: () => void }) => {
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

  if (error) return <p>Не удалось загрузить список вопросов</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.questions}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Вопросы&nbsp;
            {isLoading ? (
              <Skeleton
                borderRadius={12}
                heightSvg={28}
                widthSvg={36}
                width={36}
                height={28}
              />
            ) : (
              question &&
              question?.data &&
              question?.data[0]?.questionSpecializations[0]?.title
            )}
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
            [...new Array(10)].map((_, index) => (
              <Skeleton
                borderRadius={8}
                heightSvg={72}
                widthSvg={277}
                width={277}
                height={72}
                key={index}
              />
            ))
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
