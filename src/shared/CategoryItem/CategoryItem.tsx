import cn from "classnames";
import type { ButtonHTMLAttributes, FC } from "react";
import type { TCategoryUI } from "../../components/CategoryList/ui/CategoryUI";

import styles from "./CategoryItem.module.css";

type CategoryItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  item: TCategoryUI;
  selectedCategory: string | number | null;
};

const CategoryItem: FC<CategoryItemProps> = ({
  item,
  selectedCategory,
  ...props
}) => {
  return (
    <button
      className={cn(styles.category, {
        [styles.active]: item.id === selectedCategory,
      })}
      {...props}
    >
      {item.imageSrc && (
        <div className={styles.icon}>
          <img src="/figmaCategoryIcon.svg" alt="Иконка категории" />
          &nbsp;
        </div>
      )}
      {item.title}
    </button>
  );
};

export default CategoryItem;
