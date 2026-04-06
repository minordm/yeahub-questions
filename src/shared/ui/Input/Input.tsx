import type { InputHTMLAttributes } from "react";
import searchIcon from "@shared/assets/search-icon.svg";
import styles from "./styles.module.css";

type TSearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: TSearchInputProps) => {
  return (
    <div className={styles.search}>
      <label htmlFor="search">
        <img className={styles.icon} src={searchIcon} alt="Икнока поиска" />
      </label>
      <input name="search" id="search" className={styles.input} {...props} />
    </div>
  );
};

export default Input;
