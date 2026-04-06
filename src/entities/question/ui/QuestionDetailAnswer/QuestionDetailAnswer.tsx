import cn from "classnames";
import { createSkeleton } from "@shared/lib/utils/createSkeleton";
import { HtmlRenderer } from "@shared/ui/HtmlRenderer/HtmlRenderer";
import { FaChevronDown } from "react-icons/fa6";
import type { RefObject } from "react";
import Card from "@shared/ui/Card/Card";
import styles from "./styles.module.css";

interface IQuestionAnswerProps {
  type: "short" | "long";
  answerRef?: RefObject<HTMLDivElement | null>;
  height?: number;
  isOpen?: boolean;
  title: string;
  isLoading: boolean;
  answerText: string;
  handleOpen?: () => void;
}

const QuestionDetailAnswer = ({
  type,
  answerRef,
  height,
  title,
  isLoading,
  answerText,
  isOpen,
  handleOpen,
}: IQuestionAnswerProps) => {
  return (
    <Card>
      <div className={type === "short" ? styles.short : styles.long}>
        <h2>{title}</h2>
        <div
          className={type === "short" ? "" : styles["long-answer"]}
          ref={answerRef}
          style={{ height }}
        >
          {isLoading ? (
            createSkeleton(1, 140, 259)
          ) : (
            <HtmlRenderer html={answerText ?? ""} />
          )}
        </div>
        {!isLoading && type === "long" && (
          <button className={styles["show-button"]} onClick={handleOpen}>
            {!isOpen ? "Развернуть" : "Свернуть"}
            <FaChevronDown
              className={cn(styles.arrow, {
                [styles.open]: isOpen,
              })}
            />
          </button>
        )}
      </div>
    </Card>
  );
};

export default QuestionDetailAnswer;
