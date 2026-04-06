import FlexContainer from "@shared/ui/FlexContainer/FlexContainer";
import { QuestionsList, QuestionsListSidebar } from "@widgets/Question";
import { useState } from "react";

const QuestionsListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <FlexContainer type="row">
      <QuestionsList openModal={() => setOpen(true)} />
      <QuestionsListSidebar open={open} setOpen={setOpen} />
    </FlexContainer>
  );
};

export default QuestionsListPage;
