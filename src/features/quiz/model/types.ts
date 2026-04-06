import type { IQuestion } from "@shared/model/types";

export interface IAnswerResponse {
  questionId: number;
  questionTitle: string;
}

export interface IDataResponse {
  fullCount: number;
  questions: IQuestion[];
  response: { answers: IAnswerResponse[] };
  startDate: string;
}

export interface IQuizResponse {
  currentData: IDataResponse;
  data: IDataResponse;
  endpointName: string;
  fulfilledTimeStamp: number;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isUninitialized: boolean;
  originalArgs: { limit: number; specialization: number };
  requestId: string;
  startedTimeStamp: number;
  status: "fulfilled" | "pending" | "rejected";
}
