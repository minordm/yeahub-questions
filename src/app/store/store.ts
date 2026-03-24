import { configureStore } from "@reduxjs/toolkit";
import { questionApi } from "@entities/question";
import { categoryApi } from "@entities/category";
import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionApi.middleware,
      categoryApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
