import { skipToken } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { useParams } from "react-router";
import NotFoundPage from "@pages/notFoundPage";
import { useGetQuestionByIdQuery } from "@entities/question";
import { Content, Sidebar } from "@widgets/question";

const Question = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const {
    data: question,
    error,
    isLoading,
  } = useGetQuestionByIdQuery(id ? Number(id) : skipToken);

  if (error) return <NotFoundPage style={{ height: "calc(-460px + 100vh)" }} />;

  return (
    <>
      <Content question={question} isLoading={isLoading} setOpen={setOpen} />
      <Sidebar question={question} open={open} setOpen={setOpen} />
    </>
  );
};

export default Question;
