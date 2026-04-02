import cn from "classnames";
import type { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.css";

type CategoryItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  title: string;
  imageSrc?: string;
};

const CategoryItem = ({
  isActive = false,
  title,
  imageSrc,
  ...props
}: CategoryItemProps) => {
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
