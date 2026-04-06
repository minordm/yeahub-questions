import type { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./styles.module.css";

const Card = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
};

export default Card;
