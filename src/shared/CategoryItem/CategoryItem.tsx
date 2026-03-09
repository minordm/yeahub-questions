import cn from "classnames";

import styles from "./CategoryItem.module.css";

interface IItem {
  imageSrc?: string;
  title: string;
}

interface CategoryItemProp {
  item: IItem;
}

const CategoryItem = ({ item }: CategoryItemProp) => {
  return (
    <button
      className={cn(styles.category, {
        // [styles.active]: String(selectedCategory) === String(item.id),
        [styles.active]: false,
      })}
      //   onClick={() => selectCategory(item.id)}
    >
      {item.imageSrc && (
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
