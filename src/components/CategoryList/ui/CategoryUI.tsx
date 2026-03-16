import CategoryItem from "../../../shared/CategoryItem/CategoryItem";
import type { ICategory } from "../../../types/question";

import styles from "./CategoryUI.module.css";

export type TCategoryUI = Pick<ICategory, "id" | "title" | "imageSrc">;

interface CategoryUIProps {
  categories: TCategoryUI[];
  toggleMoreCategories: () => void;
  totalPages: number | undefined;
  onSelect: (id: number) => void;
  selectedCategory: string | number | null;
}

const CategoryUI = ({
  categories,
  toggleMoreCategories,
  totalPages,
  onSelect,
  selectedCategory,
}: CategoryUIProps) => {
  return (
    <>
      {categories.map((item) => (
        <CategoryItem
          onClick={() => onSelect(item.id)}
          selectedCategory={selectedCategory}
          key={item.id}
          item={item}
        />
      ))}
      {totalPages && totalPages >= 5 && (
        <button
          type="button"
          onClick={toggleMoreCategories}
          className={styles["show-button"]}
        >
          Показать / скрыть
        </button>
      )}
    </>
  );
};

export default CategoryUI;
