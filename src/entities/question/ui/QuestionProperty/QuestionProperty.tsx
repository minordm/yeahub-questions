import Bage from "@shared/ui/Bage/Bage";
import styles from "./styles.module.css";

interface IQuestionPropertyProps {
  complexity: number;
  rate: number;
}

const QuestionProperty = ({ complexity, rate }: IQuestionPropertyProps) => {
  return (
    <div className={styles["quiestion-property"]}>
      <Bage property="Сложность" value={complexity} />
      <Bage property="Рейтинг" value={rate} />
    </div>
  );
};

export default QuestionProperty;
