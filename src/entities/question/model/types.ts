import type { ICategory } from "@shared/model/types";

export interface IQuestion {
  code: null;
  complexity: number;
  createdAt: string;
  createdBy: {
    id: string;
    username: string;
  };
  createdById: string;
  description: string;
  id: number;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  questionSkills: ICategory[];
  questionSpecializations: ICategory[];
  questionTopics: [];
  rate: number;
  shortAnswer: string;
  slug: string; // тег
  status: "public" | "private";
  title: string;
  updatedAt: string;
  updatedBy: {
    id: string;
    username: string;
  };
  updatedById: string;
}

export interface IQuestionFiltersState {
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

export type TQuestionProps = Pick<
  IQuestion,
  | "title"
  | "rate"
  | "complexity"
  | "shortAnswer"
  | "id"
  | "questionSkills"
  | "keywords"
>;
