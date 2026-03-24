import { combineReducers } from "@reduxjs/toolkit";
import { categoryApi } from "@entities/category";
import { questionApi } from "@entities/question";
import { questionFilters } from "@entities/question/model/slice";

export const rootReducer = combineReducers({
  questionFilters,
  [questionApi.reducerPath]: questionApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});
