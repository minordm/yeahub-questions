import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IQuestion } from "@entities/question";

type QuestionResponse = IQuestion;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru/questions/public-questions",
  }),
  endpoints: (build) => ({
    getQuestions: build.query<
      { data: IQuestion[]; page: number; total: number; limit: number },
      {
        page?: number;
        title?: string;
        complexity?: string;
        rate?: string;
        specializationId: number;
        skills?: number | null;
      }
    >({
      query: ({ page, title, complexity, rate, specializationId, skills }) => ({
        url: `/?${complexity ? `&complexity=${complexity}` : ""}${rate ? `&rate=${rate}` : ""}${skills ? `&skills=${skills}` : ""}`,
        params: {
          page,
          title,
          specializationId,
        },
      }),
    }),
    getQuestionById: build.query<QuestionResponse, number>({
      query: (id: number) => `/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
