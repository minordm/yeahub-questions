import {
  questionApi,
  useGetQuestionByIdQuery,
  useGetQuestionsQuery,
} from "./api/api";
import { questionFiltersActions } from "../../features/question/model/slice";
import QuestionCount from "./ui/QuestionCount/QuestionCount";
import QuestionAccordion from "./ui/QuestionAccordion/QuestionAccordion";
import QuestionContent from "./ui/QuestionContent/QuestionContent";
import QuestionProperty from "./ui/QuestionProperty/QuestionProperty";
import QuestionCard from "./ui/QuestionCard/QuestionCard";
import QuestionDetailInfo from "./ui/QuestionDetailInfo/QuestionDetailInfo";
import QuestionDetailAnswer from "./ui/QuestionDetailAnswer/QuestionDetailAnswer";

export {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
  questionFiltersActions,
  questionApi,
  QuestionContent,
  QuestionProperty,
  QuestionAccordion,
  QuestionCount,
  QuestionCard,
  QuestionDetailInfo,
  QuestionDetailAnswer,
};
