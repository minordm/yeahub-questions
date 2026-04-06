import { createSkeleton } from "@shared/lib/utils/createSkeleton";
import Card from "@shared/ui/Card/Card";
import questionImg from "@entities/question/assets/question.png";
import sidebarIcon from "@entities/question/assets/sidebar-question-detail-icon.svg";
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
    <Card>
      <div className={styles.about}>
        <img
          src={questionImg}
          alt="картинка вопроса"
          className={styles["question-image"]}
        />
        <div className={styles.info}>
          <div className={styles.title}>
            {isLoading ? createSkeleton(1, 58, 221) : <h1>{title}</h1>}

            <button onClick={showModal} className={styles.sidebar}>
              <img src={sidebarIcon} alt="иконка сайдбара подробного вопроса" />
            </button>
          </div>
          {isLoading ? createSkeleton(1, 42, 259) : <p>{description}</p>}
        </div>
      </div>
    </Card>
  );
};

export default QuestionDetailInfo;
