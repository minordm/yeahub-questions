import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IQuizFiltersState {
  mode: "try" | "new" | "random" | "";
  count: number;
}

const initialState: IQuizFiltersState = {
  mode: "",
  count: 1,
};

export const quizFilters = createSlice({
  name: "quizFilters",
  initialState,
  reducers: {
    updateMode: (
      state,
      action: PayloadAction<"try" | "new" | "random" | "">,
    ) => {
      if (state.mode === action.payload) {
        state.mode = initialState.mode;
      } else {
        state.mode = action.payload;
      }
    },
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
});

export const quizFiltersActions = quizFilters.actions;
export default quizFilters.reducer;
