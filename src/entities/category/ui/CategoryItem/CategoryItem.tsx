import cn from "classnames";
import type { FC } from "react";
import type { CategoryItemProps } from "@entities/category";

import styles from "./styles.module.css";

const CategoryItem: FC<CategoryItemProps> = ({
  isActive = false,
  title,
  imageSrc,
  ...props
}) => {
  return (
    <button
      className={cn(styles.category, {
        [styles.active]: isActive,
      })}
      {...props}
    >
      {imageSrc && (
        <div className={styles.icon}>
          <img src="/figmaCategoryIcon.svg" alt="Иконка категории" />
          &nbsp;
        </div>
      )}
      {title}
    </button>
  );
};

export default CategoryItem;
