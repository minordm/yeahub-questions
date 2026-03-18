import { useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import QuestionContent from "./ui";
import { useGetQuestionByIdQuery } from "../../../app/redux/questionFilters/api";

const Content = () => {
  const { id } = useParams();
  const [height, setHeight] = useState(140);
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const {
    data: question,
    isError,
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

  if (isLoading) return <p>Загрузка</p>;
  if (isError) return <p>Ошибка</p>;

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
