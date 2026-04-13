import type { RefObject } from "react";
import { QuestionDetailInfo, QuestionDetailAnswer } from "@entities/question";
import styles from "./styles.module.css";
import type { IQuestion } from "@shared/model/types";

interface QuestionContentProp {
  showModal: () => void;
  isLoading: boolean;
  question: IQuestion | undefined;
  answerRef: RefObject<HTMLDivElement | null>;
  height: number;
  isOpen: boolean;
  handleOpen: () => void;
}

const QuestionDetailContent = ({
  showModal,
  isLoading,
  question,
  answerRef,
  height,
  isOpen,
  handleOpen,
}: QuestionContentProp) => {
  return (
    <div className={styles["question-detail"]}>
      <QuestionDetailInfo
        isLoading={isLoading}
        description={question?.description ?? ""}
        title={question?.title ?? ""}
        showModal={showModal}
      />

      <div className={styles.questions}>
        <QuestionDetailAnswer
          answerText={question?.shortAnswer ?? ""}
          isLoading={isLoading}
          title="Краткий ответ"
          type="short"
        />
        <QuestionDetailAnswer
          answerText={question?.longAnswer ?? ""}
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
