import cn from "classnames";
import styles from "../Content.module.css";
import { HtmlRenderer } from "../../../../components/HtmlRenderer/HtmlRenderer";
import { FaChevronDown } from "react-icons/fa6";
import type { RefObject } from "react";

interface QuestionContentProp {
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  answerRef: RefObject<HTMLDivElement | null>;
  height: number;
  isOpen: boolean;
  handleOpen: () => void;
}

const QuestionContent = ({
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
    <>
      {/* <button>Назад</button> */}

      <div className={styles.wrapper}>
        <div className={styles.about}>
          <img src="/question.png" alt="" width={160} height={160} />
          <div className={styles.title}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>

        <div className={styles.action}>
          <button className={styles.button}>
            <img src="/arrow-left.svg" alt="" />
            Предыдущий
          </button>
          <button className={styles.button}>
            Следующий
            <img src="/arrow-right.svg" alt="" />
          </button>
        </div>

        <div className={styles.questions}>
          <div className={styles.short}>
            <h2>Краткий ответ</h2>
            <div className="">
              <HtmlRenderer html={shortAnswer} />
            </div>
          </div>
          <div className={styles.long}>
            <h2>Развёрнутый ответ</h2>
            <div
              className={styles["long-answer"]}
              ref={answerRef}
              style={{ height }}
            >
              <HtmlRenderer html={longAnswer} />
            </div>
            <button className={styles["show-button"]} onClick={handleOpen}>
              {!isOpen ? "Развернуть" : "Свернуть"}
              <FaChevronDown
                className={cn(styles.arrow, {
                  [styles.open]: isOpen,
                })}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionContent;
