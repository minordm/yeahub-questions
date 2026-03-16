import { useLayoutEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import type { IQuestion } from "../../types/question";

export type TQuestionProps = Pick<
  IQuestion,
  "title" | "rate" | "complexity" | "shortAnswer" | "id"
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

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (isOpen && answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

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
      id={id}
    />
  );
};

export default AccordionButton;
