import { useLayoutEffect, useRef, useState } from "react";
import { AccordionItem } from "@features/question/ui";
import type { TQuestionProps } from "@entities/question";
import { useNavigate } from "react-router";

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
