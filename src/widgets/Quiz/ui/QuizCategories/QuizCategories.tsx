import { FilterBySpecialization } from "@features/question/ui/filter-by-specialization";
import { FilterBySkills } from "@features/question/ui/filter-by-skills";
import { FilterByComplexity } from "@features/question/ui/filter-by-complexity";
import { ChooseQuestionMode } from "@features/quiz/ui/choose-questions-by-mode";
import { ChooseQuestionCount } from "@features/quiz/ui/choose-question-count";
import cn from "classnames";
import styles from "./styles.module.css";

const QuizCategories = () => {
  return (
    <div className={styles["quiz-wrapper"]}>
      <h1 className={styles["quiz-title"]}>Собеседование</h1>
      <div className={styles["quiz-categories"]}>
        <div className={styles["quiz-categories-container"]}>
          <FilterBySpecialization />
          <FilterBySkills />
        </div>
        <div className={cn(styles["quiz-categories-container"], styles.shrink)}>
          <FilterByComplexity />
          <ChooseQuestionMode />
          <ChooseQuestionCount />
        </div>
      </div>
    </div>
  );
};

export default QuizCategories;
