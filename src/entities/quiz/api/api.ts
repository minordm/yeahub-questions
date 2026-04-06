import { categoryApi } from "@shared/model/api";
import type { IQuizResponse } from "@features/quiz/model/types";

interface IQuiz {
  skills?: number | null;
  complexity?: string;
  limit: number;
  specialization: number;
}

export const quizApi = categoryApi.injectEndpoints({
  endpoints: (build) => ({
    getQuiz: build.query<IQuizResponse, IQuiz>({
      query: ({ complexity, limit, skills, specialization }) => ({
        url: `/interview-preparation/quizzes/mock/new`,
        params: {
          limit,
          specialization,
          complexity: complexity || undefined,
          skills: skills || undefined,
        },
      }),
    }),
  }),
});

export const { useGetQuizQuery, useLazyGetQuizQuery } = quizApi;
