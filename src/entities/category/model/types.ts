import type { ICategory } from "@shared/model/types";
import type { ButtonHTMLAttributes } from "react";

export interface ICategoryResponse {
  data: ICategory[];
  limit: number;
  page: number;
  total: number;
}

export type CategoryItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  title: string;
  imageSrc?: string;
};
