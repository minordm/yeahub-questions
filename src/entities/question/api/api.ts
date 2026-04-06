import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IQuestion } from "@shared/model/types";

interface IQuestionResponse {
  data: IQuestion[];
  page: number;
  total: number;
  limit: number;
}

interface IGetQuestionsProps {
  page?: number;
  title?: string;
  complexity?: string;
  rate?: string;
  specializationId: number;
  skills?: number | null;
}

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru/questions/public-questions",
  }),
  endpoints: (build) => ({
    getQuestions: build.query<IQuestionResponse, IGetQuestionsProps>({
      query: ({ page, title, complexity, rate, specializationId, skills }) => ({
        url: `/`,
        params: {
          page,
          title,
          specializationId,
          complexity: complexity || undefined,
          rate: rate || undefined,
          skills: skills || undefined,
        },
      }),
    }),
    getQuestionById: build.query<IQuestion, number>({
      query: (id: number) => `/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
