import minusIcon from "@entities/question/assets/minus-icon.svg";
import plusIcon from "@entities/question/assets/plus-icon.svg";
import styles from "./styles.module.css";

interface IQuizQuestionCounter {
  counter: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

const QuestionCount = ({
  counter = 0,
  increaseCount,
  decreaseCount,
}: IQuizQuestionCounter) => {
  return (
    <div className={styles["question-counter-container"]}>
      <img
        src={minusIcon}
        alt="иконка минуса"
        className={styles["counter-button"]}
        onClick={decreaseCount}
      />
      <div className={styles["question-counter"]}>{counter}</div>
      <img
        src={plusIcon}
        alt="иконка плюса"
        className={styles["counter-button"]}
        onClick={increaseCount}
      />
    </div>
  );
};

export default QuestionCount;
