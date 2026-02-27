import React from "react";
import styles from "./Search.module.css";

const Search = ({ ...props }) => {
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

export default Search;
