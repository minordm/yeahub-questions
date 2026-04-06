import { QuestionCount } from "@entities/question";
import { quizFiltersActions } from "@features/quiz/model/slice";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import Block from "@shared/ui/Block/Block";

const ChooseQuestionCount = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.quizFilters.count);

  const increase = () => dispatch(quizFiltersActions.increaseCount());
  const decrease = () => {
    if (count > 1) {
      dispatch(quizFiltersActions.decreaseCount());
    }
  };

  return (
    <Block title="Количество вопросов">
      <QuestionCount
        counter={count}
        decreaseCount={decrease}
        increaseCount={increase}
      />
    </Block>
  );
};

export default ChooseQuestionCount;
