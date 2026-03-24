import type { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type TSearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<TSearchInputProps> = ({ ...props }) => {
  return (
    <div className={styles.search}>
      <label htmlFor="search">
        <img
          className={styles.icon}
          src="/search-icon.svg"
          alt="Икнока поиска"
        />
      </label>
      <input name="search" id="search" className={styles.input} {...props} />
    </div>
  );
};

export default SearchInput;
