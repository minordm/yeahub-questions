import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IQuestionFiltersState, TQuestionFiltersKey } from "./types";

const initialState: IQuestionFiltersState = {
  search: "",
  complexity: "",
  rate: "",
  skill: null,
  page: 1,
  limit: 10,
  specializationId: 11,
};

export const questionFilters = createSlice({
  name: "questionFilters",
  initialState,
  reducers: {
    reset: () => {
      return { ...initialState };
    },
    updateSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    updatePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    updateSpecialization: <K extends TQuestionFiltersKey>(
      state: IQuestionFiltersState,
      action: PayloadAction<{
        key: K;
        value: IQuestionFiltersState[K];
      }>,
    ) => {
      const { key, value } = action.payload;

      if (state[key] === value) {
        state[key] = initialState[key];
      } else {
        state[key] = value;
      }
    },
  },
});

export const questionFiltersActions = questionFilters.actions;
export default questionFilters.reducer;
