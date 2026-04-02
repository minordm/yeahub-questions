import { combineReducers } from "@reduxjs/toolkit";
import { categoryApi } from "@shared/model/api";
import { questionApi } from "@entities/question";
import questionFilters from "@entities/question/api/slice";

export const rootReducer = combineReducers({
  questionFilters,
  [questionApi.reducerPath]: questionApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});
