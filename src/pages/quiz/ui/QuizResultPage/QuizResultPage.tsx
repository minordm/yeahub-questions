import { QuestionCard } from "@entities/question";
import Card from "@shared/ui/Card/Card";
import cn from "classnames";
import styles from "./styles.module.css";
import FlexContainer from "@shared/ui/FlexContainer/FlexContainer";
import { useNavigate } from "react-router";
import type { IQuizStatus } from "@entities/quiz";

const QuizResultPage = () => {
  const navigate = useNavigate();
  const cache: IQuizStatus[] = JSON.parse(
    localStorage.getItem("quizStatus") ?? "",
  );

  return (
    <FlexContainer>
      <Card style={{ width: "100%" }}>
        <div className={cn(styles.quiz, styles["quiz-detail"])}>
          <h1 className={styles["quiz-title"]}>
            Список пройденных вопросов собеседований
          </h1>
          <ul className={styles["quiz-question-list"]}>
            {cache.map((question) => (
              <QuestionCard
                key={question.id}
                title={question.title}
                isKnown={question.isKnown}
                onClick={() => navigate(`/questions/${question.id}`)}
              />
            ))}
          </ul>
        </div>
      </Card>
    </FlexContainer>
  );
};

export default QuizResultPage;
