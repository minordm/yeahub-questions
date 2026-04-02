import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IQuestionFiltersState {
  search: string;
  complexity: string;
  rate: string;
  skill: number | null;
  page: number;
  limit: number;
  specializationId: number;
}

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
    updateComplexity: (state, action: PayloadAction<string>) => {
      if (state.complexity === action.payload) {
        state.complexity = initialState.complexity;
      } else {
        state.complexity = action.payload;
      }
    },
    updateRate: (state, action: PayloadAction<string>) => {
      if (state.rate === action.payload) {
        state.rate = initialState.rate;
      } else {
        state.rate = action.payload;
      }
    },
    updateSkill: (state, action: PayloadAction<number | null>) => {
      if (state.skill === action.payload) {
        state.skill = initialState.skill;
      } else {
        state.skill = action.payload;
      }
    },
    updateSpecialization: (state, action: PayloadAction<number>) => {
      state.specializationId = action.payload;
    },
  },
});

export const questionFiltersActions = questionFilters.actions;
export default questionFilters.reducer;
