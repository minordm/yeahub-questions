import { useLayoutEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import type { IQuestion } from "../../types/question";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/redux/root";
import { questionDetailActions } from "../../app/redux/questionDetail/slice";

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
  questionSkills,
  keywords,
  id,
}: TQuestionProps) => {
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const navigation = useNavigate();

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

  const handleNavigate = () => {
    dispatch(
      questionDetailActions.setDetail({
        keywords: keywords,
        complexity: complexity,
        rate: rate,
        skills: questionSkills,
      }),
    );
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
