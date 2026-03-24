import type { MouseEventHandler } from "react";
import styles from "./styles.module.css";

const NotFound = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.question}>
        <h2 className={styles.title}>
          К сожалению, по вашему запросу ничего не найдено.
        </h2>
        <p className={styles.desc}>
          Попробуйте изменить запрос или воспользуйтесь нашими категориями.
        </p>
      </div>
      <button className={styles["reset-button"]} onClick={onClick}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default NotFound;
