import { baseApi } from "@shared/api/api";
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

export const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<IQuestionResponse, IGetQuestionsProps>({
      query: ({ page, title, complexity, rate, specializationId, skills }) => ({
        url: `/questions/public-questions/`,
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
      query: (id: number) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
