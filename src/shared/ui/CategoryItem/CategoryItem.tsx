import cn from "classnames";
import type { ButtonHTMLAttributes } from "react";
import categoryIcon from "@shared/assets/figmaCategoryIcon.svg";
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
          <img src={categoryIcon} alt="Иконка категории" />
          &nbsp;
        </div>
      )}
      {title}
    </button>
  );
};

export default CategoryItem;
