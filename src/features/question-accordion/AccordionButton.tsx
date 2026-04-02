import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { QuestionAccordion, type IQuestion } from "@entities/question";
import useCalcHeight from "@shared/lib/hooks/useCalcHeight";

type TQuestionProps = Pick<
  IQuestion,
  | "title"
  | "rate"
  | "complexity"
  | "shortAnswer"
  | "id"
  | "questionSkills"
  | "keywords"
>;

const AccordionButton = ({
  title,
  rate,
  complexity,
  shortAnswer,
  id,
}: TQuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const navigation = useNavigate();

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const height = useCalcHeight({ ref: answerRef, isOpen, initialHeight: 0 });

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigation(`/${id}`);
  };

  return (
    <QuestionAccordion
      answerRef={answerRef}
      title={title}
      answer={shortAnswer}
      complexity={complexity}
      rate={rate}
      height={height}
      handleOpen={handleOpen}
      onNavigate={handleNavigate}
    />
  );
};

export default AccordionButton;
