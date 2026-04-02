import { createSkeleton } from "@shared/lib/utils/createSkeleton";
import NotFound from "@shared/ui/NotFound/NotFound";
import type { ReactNode } from "react";
import type { IQuestion } from "@entities/question/model/types";
import styles from "./styles.module.css";

interface IQuestionResponse {
  data: IQuestion[];
  total: number;
  page: number;
  limit: number;
}

interface IQuestionContentProps {
  questions?: IQuestionResponse;
  handleResetSearch: () => void;
  isLoading: boolean;
  openModal: () => void;
  renderQuestion: (question: IQuestion) => ReactNode;
}

const QuestionContent = ({
  questions,
  handleResetSearch,
  isLoading,
  openModal,
  renderQuestion,
}: IQuestionContentProps) => {
  return (
    <div className={styles.questions}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Вопросы&nbsp;
          {isLoading
            ? createSkeleton(1, 28, 36)
            : questions &&
              questions?.data &&
              questions?.data[0]?.questionSpecializations[0]?.title}
        </h1>
        <button className={styles["burger-button"]} onClick={openModal}>
          <img
            className={styles["sidebar-icon"]}
            src="/sidebar-mobile-icon.svg"
            alt="иконка фильтра вопросов"
          />
        </button>
      </div>
      <ul className={styles["question-list"]}>
        {isLoading ? (
          createSkeleton(10, 72, 277, 8)
        ) : questions?.data.length ? (
          questions.data.map((question) => renderQuestion(question))
        ) : (
          <NotFound onClick={handleResetSearch} />
        )}
      </ul>
    </div>
  );
};

export default QuestionContent;
