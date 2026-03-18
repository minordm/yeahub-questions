import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IQuestionFiltersState {
  search: string;
  complexity: string;
  rate: string;
  skill: number | null;
  page: number;
  limit: number;
  specializationId: number;
}

export type TQuestionFiltersKey = Extract<
  keyof IQuestionFiltersState,
  "complexity" | "rate" | "skill" | "specializationId"
>;

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
    updateSpecialization: (
      state,
      action: PayloadAction<{
        key: TQuestionFiltersKey;
        value: string | number;
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

export default questionFilters.reducer;
export const questionFiltersActions = questionFilters.actions;
