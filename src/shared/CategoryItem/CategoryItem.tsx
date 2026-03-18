import cn from "classnames";
import type { ButtonHTMLAttributes, FC } from "react";

import styles from "./CategoryItem.module.css";

type CategoryItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  title: string;
  imageSrc?: string;
};

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
