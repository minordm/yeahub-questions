import { categoryApi } from "@shared/model/api";
import type { ICategory } from "@shared/model/types";

interface ISpecializationsResponse {
  data: ICategory[];
  limit: number;
  page: number;
  total: number;
}

export const specializationsApi = categoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<
      ISpecializationsResponse,
      { limit: number }
    >({
      query: ({ limit }) => ({
        url: "specializations",
        params: {
          limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
