import React from "react";
import Search from "../Search/Search";
import CategoryBlock from "../CategoryBlock/CategoryBlock";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const arr = [
    "UI/UX designe",
    "Frontend developer",
    "Backend developer",
    "Fullstack",
    "Figma",
  ];

  const arr1 = ["Figma", "CSS", "HTML", "React.js"];

  const arr2 = ["1-3", "4-6", "7-8", "9-10"];

  const arr3 = [1, 2, 3, 4, 5];

  const arr4 = ["Изученные", "Не изученные", "Все"];
  return (
    <div className={styles.wrapper}>
      <Search placeholder="Введите запрос..." />

      <CategoryBlock title={"Специализация"} arr={arr} isLong={true} />

      <CategoryBlock title={"Навыки"} arr={arr1} isLong={true} />

      <CategoryBlock title={"Уровень сложности"} arr={arr2} />

      <CategoryBlock title={"Рейтинг"} arr={arr3} />

      <CategoryBlock title={"Статус"} arr={arr4} />
    </div>
  );
};

export default Sidebar;
