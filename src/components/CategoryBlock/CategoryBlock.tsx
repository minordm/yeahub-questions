import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import styles from "./CategoryBlock.module.css";

const CategoryBlock = ({ title, arr, isLong = false }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <CategoryList arr={arr} />
      {isLong && <a href="">Посмотреть&nbsp;все</a>}
    </div>
  );
};

export default CategoryBlock;
