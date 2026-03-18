import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICategory } from "../../../types/question";

// interface ISkills {
//   createdAt: string;
//   description: string;
//   id: number;
//   imageSrc: string;
//   title: string;
//   updatedAt: string;
// }

interface IQuestionDetailState {
  complexity: number;
  rate: number;
  // skills: ISkills[];
  skills: ICategory[];
  keywords: string[];
}

export type TQuestionDetailKey = Extract<
  keyof IQuestionDetailState,
  "complexity" | "rate" | "skills" | "keywords"
>;

const initialState: IQuestionDetailState = {
  complexity: 0,
  rate: 0,
  skills: [],
  keywords: [],
};

export const questionDetail = createSlice({
  name: "questionDetail",
  initialState,
  reducers: {
    reset: () => {
      return { ...initialState };
    },
    setDetail: (state, action: PayloadAction<IQuestionDetailState>) => {
      state.complexity = action.payload.complexity;
      state.rate = action.payload.rate;
      state.skills = action.payload.skills;
      state.keywords = action.payload.keywords;
    },
  },
});

export default questionDetail.reducer;
export const questionDetailActions = questionDetail.actions;
