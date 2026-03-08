import styles from "./CategoryItem.module.css";
import type { ICategoryProps } from "../CategoryBlock/CategoryBlock";
import cn from "classnames";

const CategoryItem = ({
  item,
  selectCategory,
  selectedCategory,
}: {
  item: ICategoryProps;
  // selectCategory: React.Dispatch<React.SetStateAction<string>>;
  selectCategory: (prevState: string) => void;
  selectedCategory: string;
}) => {
  return (
    <button
      className={cn(styles.category, {
        [styles.active]: String(selectedCategory) === String(item.id),
      })}
      onClick={() => selectCategory(item.id)}
    >
      {item?.imageSrc && (
        <div className={styles.icon}>
          <img
            // src={item.imageSrc}
            // src="/ts-icon.png"
            src="/figmaCategoryIcon.svg"
            alt="Иконка категории"
          />
          &nbsp;
        </div>
      )}
      {item.title}
    </button>
  );
};

export default CategoryItem;
