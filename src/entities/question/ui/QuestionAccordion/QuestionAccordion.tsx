import Accordion from "@shared/ui/Accordion/Accordion";
import QuestionProperty from "../QuestionProperty/QuestionProperty";
import { HtmlRenderer } from "@shared/ui/HtmlRenderer/HtmlRenderer";

import type { Ref } from "react";
import styles from "./styles.module.css";

interface IQuestionAccordionProps {
  rate: number;
  complexity: number;
  onNavigate: () => void;
  answer: string;
  title: string;
  handleOpen: () => void;
  height: number;
  answerRef: Ref<HTMLDivElement>;
}

const QuestionAccordion = ({
  rate,
  complexity,
  onNavigate,
  answer,
  title,
  handleOpen,
  height,
  answerRef,
}: IQuestionAccordionProps) => {
  return (
    <Accordion
      handleOpen={handleOpen}
      height={height}
      answerRef={answerRef}
      title={title}
    >
      <QuestionProperty complexity={complexity} rate={rate} />
      <HtmlRenderer html={answer} />
      <button className={styles.close} onClick={onNavigate}>
        Подробнее
      </button>
    </Accordion>
  );
};

export default QuestionAccordion;
