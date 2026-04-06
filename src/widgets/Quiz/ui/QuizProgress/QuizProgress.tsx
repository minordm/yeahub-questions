import cn from "classnames";
import Card from "@shared/ui/Card/Card";
import Progress from "@shared/ui/Progress/Progress";
import styles from "./styles.module.css";

const QuizProgress = ({
  completed,
  curIndex,
  total,
}: {
  completed: number;
  curIndex: number;
  total: number;
}) => {
  return (
    <Card>
      <div className={cn(styles.quiz, styles["quiz-detail"])}>
        <div className={styles["quiz-header"]}>
          <h2 className={cn(styles["quiz-title"], styles["quiz-detail-title"])}>
            Вопросы собеседования
          </h2>
          <p className={styles["quiz-count"]}>
            {curIndex + 1}/{total}
          </p>
        </div>
        <Progress value={completed} max={total} />
      </div>
    </Card>
  );
};

export default QuizProgress;
