import type { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classnameType: "small" | "big";
}

const Button = ({ text, classnameType, ...props }: IButtonProps) => {
  return (
    <button
      className={cn({
        [styles.button]: classnameType === "small",
        [styles.big]: classnameType === "big",
      })}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
