import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ICategory } from "../../../types/question";

export interface ICategoryResponse {
  data: ICategory[];
  limit: number;
  page: number;
  total: number;
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru/",
  }),
  endpoints: (build) => ({
    getCategory: build.query<
      ICategoryResponse,
      { categoryQuery: string; limit: number }
    >({
      query: ({ categoryQuery, limit }) => ({
        url: `${categoryQuery}`,
        params: {
          limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
