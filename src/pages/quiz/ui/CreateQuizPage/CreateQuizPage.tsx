import cn from "classnames";
import Button from "@shared/ui/Button/Button";
import { useLazyGetQuizQuery } from "@entities/quiz";
import { useAppSelector } from "@shared/model/storeFn";
import Card from "@shared/ui/Card/Card";
import { useNavigate } from "react-router";
import FlexContainer from "@shared/ui/FlexContainer/FlexContainer";
import useLocalStorage from "@shared/lib/hooks/useLocalStorage.js";
import { useEffect } from "react";
import { QuizCategories } from "@widgets/Quiz";
import styles from "./styles.module.css";
import type { IQuizResponse } from "@features/quiz/model/types";

const CreateQuizPage = () => {
  const navigate = useNavigate();

  const specialization = useAppSelector(
    (state) => state.questionFilters.specializationId,
  );
  const skills = useAppSelector((state) => state.questionFilters.skill);
  const complexity = useAppSelector(
    (state) => state.questionFilters.complexity,
  );

  const limit = useAppSelector((state) => state.quizFilters.count);

  const [trigger, result] = useLazyGetQuizQuery();

  const { setStoredValue } = useLocalStorage<IQuizResponse | undefined>(
    "quiz",
    result.data,
  );

  const { setStoredValue: setCurIndex } = useLocalStorage("quizCurIndex", 0);
  const { setStoredValue: setIsCompleted } = useLocalStorage(
    "quizCompletedCount",
    0,
  );

  useEffect(() => {
    localStorage.setItem("quiz", JSON.stringify(""));
    setStoredValue(result.data);
    setCurIndex(0);
    setIsCompleted(0);
    localStorage.setItem("quizStatus", JSON.stringify([]));
  }, [result, setStoredValue, setCurIndex, setIsCompleted]);

  return (
    <FlexContainer>
      <Card>
        <div className={cn(styles.quiz, styles["quiz-detail"])}>
          <QuizCategories />
          <Button
            style={{ alignSelf: "flex-end" }}
            classnameType="big"
            onClick={async () => {
              await trigger({
                limit,
                specialization,
                complexity,
                skills,
              });
              navigate("/quiz", { replace: true });
            }}
          >
            Начать
          </Button>
        </div>
      </Card>
    </FlexContainer>
  );
};

export default CreateQuizPage;
