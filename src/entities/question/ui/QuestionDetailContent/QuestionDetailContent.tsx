import type { RefObject } from "react";
import QuestionDetailInfo from "../QuestionDetailInfo/QuestionDetailInfo";
import QuestionDetailAnswer from "../QuestionDetailAnswer/QuestionDetailAnswer";
import styles from "./styles.module.css";

interface QuestionContentProp {
  showModal: () => void;
  isLoading: boolean;
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  answerRef: RefObject<HTMLDivElement | null>;
  height: number;
  isOpen: boolean;
  handleOpen: () => void;
}

const QuestionDetailContent = ({
  showModal,
  isLoading,
  title,
  description,
  shortAnswer,
  longAnswer,
  answerRef,
  height,
  isOpen,
  handleOpen,
}: QuestionContentProp) => {
  return (
    <div className={styles["question-detail"]}>
      <QuestionDetailInfo
        isLoading={isLoading}
        description={description ?? ""}
        title={title ?? ""}
        showModal={showModal}
      />

      <div className={styles.questions}>
        <QuestionDetailAnswer
          answerText={shortAnswer ?? ""}
          isLoading={isLoading}
          title="Краткий ответ"
          type="short"
        />
        <QuestionDetailAnswer
          answerText={longAnswer ?? ""}
          isLoading={isLoading}
          title="Развёрнутый ответ"
          type="long"
          answerRef={answerRef}
          handleOpen={handleOpen}
          height={height}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default QuestionDetailContent;
