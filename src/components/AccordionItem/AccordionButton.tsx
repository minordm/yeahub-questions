import { useLayoutEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";

export interface IQuestionProps {
  description: string;
  id: number;
  keywords: string[];
  longAnswer: string;
  rate: number;
  shortAnswer: string;
  title: string;
  complexity: number;
}

const AccordionButton = ({ title, rate, complexity, shortAnswer, id }) => {
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
