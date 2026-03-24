import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import type { FC, HTMLProps } from "react";

const NotFoundPage: FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {
  const navigation = useNavigate();
  return (
    <div className={styles["not-found"]} {...props}>
      <h1 className={styles.title}>Не удалось загрузить данные</h1>
      <p className={styles.desc}>
        Попробуйте еще раз или перейдите на главную страницу
      </p>
      <button onClick={() => navigation("/")} className={styles.button}>
        На главную
      </button>
    </div>
  );
};

export default NotFoundPage;
