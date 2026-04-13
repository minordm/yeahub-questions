import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api/api";
import questionFilters from "@features/question/model/slice";
import quizFilters from "@features/quiz/model/slice";

export const rootReducer = combineReducers({
  quizFilters,
  questionFilters,
  [baseApi.reducerPath]: baseApi.reducer,
});
