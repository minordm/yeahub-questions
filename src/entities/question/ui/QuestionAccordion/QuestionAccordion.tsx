import Accordion from "@shared/ui/Accordion/Accordion";
import QuestionProperty from "../QuestionProperty/QuestionProperty";
import { HtmlRenderer } from "@shared/ui/HtmlRenderer/HtmlRenderer";

import { useNavigate } from "react-router";
import type { IQuestion } from "@shared/model/types";
import Button from "@shared/ui/Button/Button";

type TQuestionProps = Pick<
  IQuestion,
  "title" | "rate" | "complexity" | "shortAnswer" | "id"
>;

const QuestionAccordion = ({
  id,
  rate,
  complexity,
  shortAnswer,
  title,
}: TQuestionProps) => {
  const navigation = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigation(`/questions/${id}`);
  };

  return (
    <Accordion title={title}>
      <QuestionProperty complexity={complexity} rate={rate} />
      <HtmlRenderer html={shortAnswer} />
      <Button
        classnameType="small"
        onClick={handleNavigate}
        style={{ alignSelf: "flex-end", fontWeight: 600 }}
      >
        Подробнее
      </Button>
    </Accordion>
  );
};

export default QuestionAccordion;
