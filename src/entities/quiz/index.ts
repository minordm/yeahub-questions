import { useGetQuizQuery, useLazyGetQuizQuery } from "./api/api";
import QuizAction from "./ui/QuizAction/QuizAction";
import QuizNavigation from "./ui/QuizNavigation/QuizNavigation";
import type { IQuizStatus } from "./module/types";

export { useGetQuizQuery, useLazyGetQuizQuery, QuizAction, QuizNavigation };
export type { IQuizStatus };
