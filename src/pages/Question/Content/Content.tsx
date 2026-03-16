import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import QuestionContent from "./ui";
import { useGetQuestionByIdQuery } from "../../../app/redux/question/api";
import { useDispatch } from "react-redux";
import { questionActions } from "../../../app/redux/question/slice";

const Content = () => {
  const { id } = useParams();
  const [height, setHeight] = useState(140);
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const {
    data: question,
    error,
    isLoading,
  } = useGetQuestionByIdQuery(Number(id));

  const handleOpen = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    if (isOpen && answerRef.current) {
      setHeight(answerRef.current.scrollHeight + 30);
    } else {
      setHeight(140);
    }
  }, [isOpen]);

  // useEffect(() => {})
  dispatch(
    questionActions.updateSpecialization({
      key: "complexityQuestion",
      value: question?.complexity,
    }),
  );
  dispatch(
    questionActions.updateSpecialization({
      key: "rateQuestion",
      value: question?.rate,
    }),
  );
  dispatch(
    questionActions.updateSpecialization({
      key: "skillsQuestion",
      value: question?.questionSkills,
    }),
  );
  dispatch(
    questionActions.updateSpecialization({
      key: "keywordsQuestion",
      value: question?.keywords,
    }),
  );

  if (isLoading) return <p>Загрузка</p>;
  if (error) return JSON.stringify(error);

  return question ? (
    <QuestionContent
      answerRef={answerRef}
      description={question.description}
      height={height}
      longAnswer={question.longAnswer}
      shortAnswer={question.shortAnswer}
      title={question.title}
      handleOpen={handleOpen}
      isOpen={isOpen}
    />
  ) : (
    <>Ничего нет</>
  );
};

export default Content;
