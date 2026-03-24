import {
  questionApi,
  useGetQuestionByIdQuery,
  useGetQuestionsQuery,
} from "./api/api";
import { questionFiltersActions } from "./model/slice";
import type {
  IQuestion,
  TQuestionFiltersKey,
  TQuestionProps,
} from "./model/types";
import QuestionProperty from "./ui";

export {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
  questionFiltersActions,
  questionApi,
  QuestionProperty,
  type IQuestion,
  type TQuestionProps,
  type TQuestionFiltersKey,
};
