import cn from "classnames";
import styles from "../Content.module.css";
import { HtmlRenderer } from "@shared/ui/HtmlRenderer/HtmlRenderer";
import { FaChevronDown } from "react-icons/fa6";
import type { RefObject } from "react";
import { useNavigate } from "react-router";
import { createSkeleton } from "@shared/utils/createSkeleton";

interface QuestionContentProp {
  showModal: () => void;
  isLoading: boolean;
  title?: string;
  description?: string;
  shortAnswer?: string;
  longAnswer?: string;
  answerRef: RefObject<HTMLDivElement | null>;
  height: number;
  isOpen: boolean;
  handleOpen: () => void;
}

const QuestionContent = ({
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
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        Назад
      </button>
      <div className={styles.about}>
        <img
          src="/question.png"
          alt="картинка вопроса"
          className={styles["question-image"]}
        />
        <div className={styles.info}>
          <div className={styles.title}>
            {isLoading ? createSkeleton(1, 58, 221) : <h1>{title}</h1>}

            <button onClick={showModal} className={styles.sidebar}>
              <img
                src="/sidebar-question-detail-icon.svg"
                alt="иконка сайдбара подробного вопроса"
              />
            </button>
          </div>
          {isLoading ? createSkeleton(1, 42, 259) : <p>{description}</p>}
        </div>
      </div>

      <div className={styles.questions}>
        <div className={styles.short}>
          <h2>Краткий ответ</h2>
          <div className="">
            {isLoading ? (
              createSkeleton(1, 208, 259)
            ) : (
              <HtmlRenderer html={shortAnswer ?? ""} />
            )}
          </div>
        </div>
        <div className={styles.long}>
          <h2>Развёрнутый ответ</h2>
          <div
            className={styles["long-answer"]}
            ref={answerRef}
            style={{ height }}
          >
            {isLoading ? (
              createSkeleton(1, 140, 259)
            ) : (
              <HtmlRenderer html={longAnswer ?? ""} />
            )}
          </div>
          {!isLoading && (
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
      </div>
    </div>
  );
};

export default QuestionContent;
