export interface ICategory {
  createdAt: string;
  createdBy: string | null;
  description: string;
  id: number;
  imageSrc: string | null;
  slug: string; // тег
  title: string;
  updatedAt: string;
}

export interface IQuestion {
  code: null;
  complexity: number;
  createdAt: string;
  createdBy: {
    id: string;
    username: string;
  };
  createdById: string;
  description: string;
  id: number;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  questionSkills: ICategory[];
  questionSpecializations: ICategory[];
  questionTopics: [];
  rate: number;
  shortAnswer: string;
  slug: string; // тег
  status: "public" | "private";
  title: string;
  updatedAt: string;
  updatedBy: {
    id: string;
    username: string;
  };
  updatedById: string;
}
