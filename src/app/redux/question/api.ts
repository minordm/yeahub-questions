import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IQuestion } from "../../../types/question";

type QuestionResponse = IQuestion;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru/questions/public-questions",
  }),
  endpoints: (build) => ({
    getQuestions: build.query<
      IQuestion,
      {
        page?: number;
        title?: string;
        complexity?: string;
        rate?: string;
        keyword?: string;
        specializationId: number;
      }
    >({
      query: ({
        page,
        title,
        complexity,
        rate,
        keyword,
        specializationId,
      }) => ({
        url: `/?${complexity ? `&complexity=${complexity}` : ""}${rate ? `&rate=${rate}` : ""}${keyword ? `&titleOrDescription=${keyword}` : ""}`,
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
