import React from "react";
import styles from "./CategoryItem.module.css";

const CategoryItem = ({ text }: { text: string }) => {
  return <button className={styles.category}>{text}</button>;
};

export default CategoryItem;
