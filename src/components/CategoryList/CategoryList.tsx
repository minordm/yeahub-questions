import React from "react";
import styles from "./CategoryList.module.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import type { ICategoryProps } from "../CategoryBlock/CategoryBlock";

const CategoryList = ({
  categories,
  selectCategory,
  selectedCategory,
}: {
  categories: ICategoryProps[];
  // selectCategory: React.Dispatch<React.SetStateAction<string>>;
  selectCategory: (prevState: string) => void;
  selectedCategory: string;
}) => {
  return (
    <div className={styles.categories}>
      {categories.map((item) => (
        <CategoryItem
          selectedCategory={selectedCategory}
          selectCategory={selectCategory}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default CategoryList;
