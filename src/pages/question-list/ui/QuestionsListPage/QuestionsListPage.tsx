import { QuestionsList, QuestionsListSidebar } from "@widgets/Question";
import { useState } from "react";

const QuestionsListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <QuestionsList openModal={() => setOpen(true)} />
      <QuestionsListSidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default QuestionsListPage;
