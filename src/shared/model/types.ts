export type TModalState =
  | ""
  | "navigation"
  | "burger"
  | "questions"
  | "questionDetail";

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
