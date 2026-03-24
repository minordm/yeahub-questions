import type { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

type KeyWordButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

const KeyWordButton = ({ title, ...props }: KeyWordButtonProps) => {
  return (
    <button className={styles.words} {...props}>
      #{title}
    </button>
  );
};

export default KeyWordButton;
