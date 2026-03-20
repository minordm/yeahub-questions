import { useNavigate } from "react-router";
import cn from "classnames";
import styles from "./Header.module.css";

const Buttons = ({
  isMobile,
  closeModal,
}: {
  isMobile?: boolean;
  closeModal?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(styles["auth-buttons"], {
        [styles.mobile]: isMobile,
      })}
    >
      <button
        className={styles.small}
        onClick={() => {
          if (closeModal) {
            closeModal();
          }
          navigate("/login");
        }}
      >
        Вход
      </button>
      <button
        className={styles.big}
        onClick={() => {
          if (closeModal) {
            closeModal();
          }
          navigate("/registr");
        }}
      >
        Регистрация
      </button>
    </div>
  );
};

export default Buttons;
