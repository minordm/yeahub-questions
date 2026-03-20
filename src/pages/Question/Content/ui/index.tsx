import cn from "classnames";
import styles from "../Content.module.css";
import { HtmlRenderer } from "../../../../components/HtmlRenderer/HtmlRenderer";
import { FaChevronDown } from "react-icons/fa6";
import type { RefObject } from "react";
import Skeleton from "../../../../shared/Skeleton/Skeleton";
import { useNavigate } from "react-router";

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
            {isLoading ? (
              <Skeleton
                borderRadius={12}
                heightSvg={58}
                height={58}
                widthSvg={221}
                width={221}
              />
            ) : (
              <h1>{title}</h1>
            )}

            <button onClick={showModal} className={styles.sidebar}>
              <img
                src="/sidebar-question-detail-icon.svg"
                alt="иконка сайдбара подробного вопроса"
              />
            </button>
          </div>
          {isLoading ? (
            <Skeleton
              borderRadius={12}
              widthSvg={259}
              width={259}
              heightSvg={42}
              height={42}
            />
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>

      <div className={styles.questions}>
        <div className={styles.short}>
          <h2>Краткий ответ</h2>
          <div className="">
            {isLoading ? (
              <Skeleton
                borderRadius={12}
                widthSvg={259}
                width={259}
                heightSvg={208}
                height={208}
              />
            ) : (
              <HtmlRenderer html={shortAnswer} />
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
              <Skeleton
                borderRadius={12}
                widthSvg={259}
                width={259}
                heightSvg={140}
                height={140}
              />
            ) : (
              <HtmlRenderer html={longAnswer} />
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
