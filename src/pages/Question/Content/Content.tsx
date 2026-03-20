import { useLayoutEffect, useRef, useState } from "react";
import QuestionContent from "./ui";
import type { IQuestion } from "../../../types/question";
interface IQuestionProps {
  question?: IQuestion;
  isLoading: boolean;
  setOpen: (value: boolean) => void;
}

const Content = ({ question, isLoading, setOpen }: IQuestionProps) => {
  const [height, setHeight] = useState(140);
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    if (isOpen && answerRef.current) {
      setHeight(answerRef.current.scrollHeight + 30);
    } else {
      setHeight(140);
    }
  }, [isOpen]);

  return (
    <QuestionContent
      showModal={() => setOpen(true)}
      isLoading={isLoading}
      answerRef={answerRef}
      description={question?.description}
      height={height}
      longAnswer={question?.longAnswer}
      shortAnswer={question?.shortAnswer}
      title={question?.title}
      handleOpen={handleOpen}
      isOpen={isOpen}
    />
  );
};

export default Content;
