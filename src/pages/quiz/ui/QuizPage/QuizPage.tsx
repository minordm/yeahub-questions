import type { IDataResponse } from "@features/quiz/model/types";
import useLocalStorage from "@shared/lib/hooks/useLocalStorage";
import FlexContainer from "@shared/ui/FlexContainer/FlexContainer";
import { QuizProgress, QuestionAnswer } from "@widgets/Quiz";

const QuizPage = () => {
  const { value: curIndex, setStoredValue: setCurIndex } = useLocalStorage(
    "quizCurIndex",
    0,
  );
  const { value: isCompleted, setStoredValue: setIsCompleted } =
    useLocalStorage("quizCompletedCount", 0);

  const storedValue: IDataResponse = JSON.parse(
    localStorage.getItem("quiz") ?? "",
  );

  return (
    <FlexContainer type="column">
      <QuizProgress
        completed={isCompleted}
        curIndex={curIndex}
        total={storedValue.fullCount}
      />
      <QuestionAnswer
        curIndex={curIndex}
        setCurIndex={setCurIndex}
        question={storedValue.questions[curIndex]}
        total={storedValue.fullCount}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </FlexContainer>
  );
};

export default QuizPage;
