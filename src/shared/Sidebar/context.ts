import { createContext, useContext } from "react";
import type { TQuestionFiltersKey } from "../../app/redux/questionFilters/slice";

export type SidebarContextProps = {
  text: string;
  skill: TQuestionFiltersKey;
};

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("not context");
  }
  return context;
}
