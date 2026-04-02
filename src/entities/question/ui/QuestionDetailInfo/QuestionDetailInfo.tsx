import { createSkeleton } from "@shared/lib/utils/createSkeleton";
import styles from "./styles.module.css";

interface IQuestionInfoProps {
  isLoading: boolean;
  title: string;
  showModal: () => void;
  description: string;
}

const QuestionDetailInfo = ({
  isLoading,
  description,
  showModal,
  title,
}: IQuestionInfoProps) => {
  return (
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
  );
};

export default QuestionDetailInfo;
