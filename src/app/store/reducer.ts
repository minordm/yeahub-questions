import { combineReducers } from "@reduxjs/toolkit";
import { categoryApi } from "@shared/model/api";
import { questionApi } from "@entities/question";
import questionFilters from "@features/question/model/slice";
import quizFilters from "@features/quiz/model/slice";

export const rootReducer = combineReducers({
  quizFilters,
  questionFilters,
  [questionApi.reducerPath]: questionApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});
