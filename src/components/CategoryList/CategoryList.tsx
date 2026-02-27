import React from "react";
import styles from "./CategoryList.module.css";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = ({ arr }) => {
  return (
    <div className={styles.categories}>
      {arr.map((item) => (
        <CategoryItem key={item} text={item} />
      ))}
    </div>
  );
};

export default CategoryList;
