import {
  questionApi,
  useGetQuestionByIdQuery,
  useGetQuestionsQuery,
} from "./api/api";
import { questionFiltersActions } from "./api/slice";
import type { IQuestion } from "./model/types";
import QuestionAccordion from "./ui/QuestionAccordion/QuestionAccordion";
import QuestionContent from "./ui/QuestionContent/QuestionContent";
import QuestionDetailContent from "./ui/QuestionDetailContent/QuestionDetailContent";
import QuestionProperty from "./ui/QuestionProperty/QuestionProperty";

export {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
  questionFiltersActions,
  questionApi,
  QuestionContent,
  QuestionProperty,
  QuestionDetailContent,
  QuestionAccordion,
  type IQuestion,
};
