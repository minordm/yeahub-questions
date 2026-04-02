import type { TModalState } from "@shared/model/types";
import { createContext, useContext } from "react";

export type TModalContextProps = {
  open: TModalState;
  setOpen: React.Dispatch<React.SetStateAction<TModalState>>;
};

export const ModalContext = createContext<TModalContextProps | undefined>(
  undefined,
);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("not context");
  }
  return context;
}
