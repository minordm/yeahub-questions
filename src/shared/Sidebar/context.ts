import { createContext, useContext } from "react";
import type { TQuestionKey } from "../../app/redux/question/slice";

export type SidebarContextProps = {
  text: string;
  skill: TQuestionKey;
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
