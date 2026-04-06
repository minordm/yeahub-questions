import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  classnameType: "small" | "big" | "exit" | "nav";
  isActive?: boolean;
}

const Button = ({
  children,
  classnameType,
  isActive,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn({
        [styles.small]: classnameType === "small",
        [styles.big]: classnameType === "big",
        [styles.exit]: classnameType === "exit",
        [styles.nav]: classnameType === "nav",
        [styles.active]: isActive,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
