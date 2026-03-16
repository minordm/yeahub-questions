import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IQuestionState {
  search: string;
  complexity: string;
  rate: string;
  skill: number | null;
  page: number;
  limit: number;
  specializationId: number;
  //
  complexityQuestion: number;
  rateQuestion: number;
  skillsQuestion: any[];
  keywordsQuestion: string[];
}

export type TQuestionKey = Extract<
  keyof IQuestionState,
  | "complexity"
  | "rate"
  | "skill"
  | "specializationId"
  | "complexityQuestion"
  | "rateQuestion"
  | "skillsQuestion"
  | "keywordsQuestion"
>;

const initialState: IQuestionState = {
  search: "",
  complexity: "",
  rate: "",
  skill: null,
  page: 1,
  limit: 10,
  specializationId: 11,
  //
  complexityQuestion: 0,
  rateQuestion: 0,
  skillsQuestion: [],
  keywordsQuestion: [""],
};

export const question = createSlice({
  name: "question",
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
        key: TQuestionKey;
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

export default question.reducer;
export const questionActions = question.actions;
