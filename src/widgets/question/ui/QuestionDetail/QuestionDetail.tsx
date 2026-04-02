import { useRef, useState } from "react";
import {
  QuestionDetailContent,
  useGetQuestionByIdQuery,
} from "@entities/question";
import { Navigate, useParams } from "react-router";
import { skipToken } from "@reduxjs/toolkit/query";
import useCalcHeight from "@shared/lib/hooks/useCalcHeight";

interface IQuestionProps {
  setOpen: (value: boolean) => void;
}

const QuestionDetail = ({ setOpen }: IQuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const { id } = useParams();
  const {
    data: question,
    isError,
    isLoading,
  } = useGetQuestionByIdQuery(id ? Number(id) : skipToken);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const height = useCalcHeight({ ref: answerRef, isOpen, initialHeight: 140 });

  if (isError) {
    return <Navigate to={"*"} />;
  }

  return (
    <QuestionDetailContent
      showModal={() => setOpen(true)}
      isLoading={isLoading}
      answerRef={answerRef}
      description={question?.description ?? ""}
      height={height}
      longAnswer={question?.longAnswer ?? ""}
      shortAnswer={question?.shortAnswer ?? ""}
      title={question?.title ?? ""}
      handleOpen={handleOpen}
      isOpen={isOpen}
    />
  );
};

export default QuestionDetail;
