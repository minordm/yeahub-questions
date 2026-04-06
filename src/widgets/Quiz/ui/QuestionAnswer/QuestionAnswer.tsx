import Card from "@shared/ui/Card/Card";
import cn from "classnames";
import Button from "@shared/ui/Button/Button";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { HtmlRenderer } from "@shared/ui/HtmlRenderer/HtmlRenderer";
import type { IQuestion } from "@shared/model/types";
import { useQuizStatus } from "@widgets/Quiz";
import { QuizAction, QuizNavigation } from "@entities/quiz";
import styles from "./styles.module.css";

interface IQuestionAnswerProps {
  curIndex: number;
  setCurIndex: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  question: IQuestion;
  isCompleted: number;
  setIsCompleted: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionAnswer = ({
  curIndex,
  setCurIndex,
  total,
  question,
  isCompleted,
  setIsCompleted,
}: IQuestionAnswerProps) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const { isKnown, setIsKnown } = useQuizStatus({ curIndex, question });

  return (
    <Card>
      <div className={cn(styles.quiz, styles["quiz-detail"])}>
        <QuizNavigation
          curIndex={curIndex}
          setCurIndex={setCurIndex}
          setIsKnown={setIsKnown}
          setIsOpen={setIsOpen}
          total={total}
          isCompleted={isCompleted}
        />

        <div className={styles["question-wrapper"]}>
          <div className={styles["question-container"]}>
            <p className={styles.question}>{question.title}</p>
            <div className="">
              {isOpen && <HtmlRenderer html={question.shortAnswer} />}
              <Button
                classnameType="small"
                onClick={() => setIsOpen((prev) => !prev)}
                style={{ padding: 0 }}
              >
                Посмотреть ответ
              </Button>
            </div>
            <QuizAction
              isKnown={isKnown}
              curIndex={curIndex}
              setIsCompleted={setIsCompleted}
              setIsKnown={setIsKnown}
            />
          </div>
          {curIndex + 1 !== total ? (
            <Button classnameType="exit" onClick={() => navigate("new")}>
              Завершить
            </Button>
          ) : (
            <Button
              classnameType="big"
              style={{ alignSelf: "flex-start" }}
              disabled={isCompleted !== total}
              onClick={() => navigate("/quiz/result", { replace: true })}
            >
              Проверить
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default QuestionAnswer;
