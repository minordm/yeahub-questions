import type { TDate } from "./common";

export interface ICategory {
  createdAt: TDate;
  createdBy: TDate | null;
  description: string;
  id: number;
  imageSrc: string | null;
  slug: string; // тег
  title: string;
  updatedAt: TDate;
}

export interface IQuestion {
  code: null;
  complexity: number;
  createdAt: TDate;
  createdBy: {
    id: string; // одинаковые с createdById
    username: string;
  };
  createdById: string; // одинаковые с createdBy: id
  description: string;
  id: number;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  questionSkills: ICategory[];
  questionSpecializations: ICategory[];
  questionTopics: any[];
  rate: number;
  shortAnswer: string;
  slug: string; // тег
  status: "public" | "private";
  title: string;
  updatedAt: TDate;
  updatedBy: {
    id: string;
    username: string;
  };
  updatedById: string;
}
