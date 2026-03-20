import { useLayoutEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import type { IQuestion } from "../../types/question";
import { useNavigate } from "react-router";

export type TQuestionProps = Pick<
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
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const navigation = useNavigate();

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (isOpen && answerRef.current) {
      setHeight(answerRef.current.scrollHeight - 24);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigation(`/${id}`);
  };

  return (
    <AccordionItem
      isOpen={isOpen}
      ref={answerRef}
      height={height}
      open={handleOpen}
      title={title}
      rate={rate}
      complexity={complexity}
      shortAnswer={shortAnswer}
      onNavigate={handleNavigate}
    />
  );
};

export default AccordionButton;
