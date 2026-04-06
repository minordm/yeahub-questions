import type { PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

const FlexContainer = ({
  type,
  children,
}: PropsWithChildren & { type?: "row" | "column" }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.row]: type === "row",
        [styles.column]: type === "column",
      })}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
