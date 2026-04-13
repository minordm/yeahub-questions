import { baseApi } from "@shared/api/api";
import type { ICategory } from "@shared/model/types";

interface ISkillsResponse {
  data: ICategory[];
  limit: number;
  page: number;
  total: number;
}

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<
      ISkillsResponse,
      { specializationId: number; limit: number }
    >({
      query: ({ specializationId, limit }) => ({
        url: "skills",
        params: {
          limit: limit,
          specializations: specializationId,
        },
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
