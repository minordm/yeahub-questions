import Card from "@shared/ui/Card/Card";
import Button from "@shared/ui/Button/Button";
import questionIcon from "@entities/question/assets/quiz-question-icon.png";
import LikeIconSvg from "@shared/ui/LikeIconSvg/LikeIconSvg";
import type { HTMLProps } from "react";
import styles from "./styles.module.css";

const QuestionCard = ({
  title,
  isKnown,
  ...props
}: {
  title: string;
  isKnown: boolean;
} & HTMLProps<HTMLDivElement>) => {
  return (
    <Card>
      <div className={styles["question-card"]} {...props}>
        <img
          src={questionIcon}
          alt="Иконка вопроса"
          className={styles["question-image-icon"]}
        />
        <div className={styles["question-info"]}>
          <h3 className={styles["quiz-question-title"]}>{title}</h3>
          <Button classnameType="nav" isActive={isKnown} disabled>
            <LikeIconSvg
              style={{
                transform: isKnown ? "" : "rotate(180deg) scaleX(-100%)",
              }}
            />
            {isKnown ? "Знаю" : "Не знаю"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
