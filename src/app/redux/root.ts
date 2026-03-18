import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import questionFilters from "./questionFilters/slice";
import questionDetail from "./questionDetail/slice";
import { questionApi } from "./questionFilters/api";
import { categoryApi } from "./category/api";

export const store = configureStore({
  reducer: {
    questionFilters,
    questionDetail,
    [questionApi.reducerPath]: questionApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionApi.middleware,
      categoryApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
