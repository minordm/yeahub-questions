import QuestionPagination from "@features/question-pagination/QuestionPagination";
import QuestionListFilter from "@features/question-list-filter/QuestionListFilter";
import styles from "./styles.module.css";

const QuestionsList = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className={styles["questions-container"]}>
      <QuestionListFilter openModal={openModal} />
      <QuestionPagination />
    </div>
  );
};

export default QuestionsList;
