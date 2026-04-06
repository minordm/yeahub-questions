import { useNavigate } from "react-router";
import cn from "classnames";
import Button from "@shared/ui/Button/Button";
import styles from "./styles.module.css";

const AuthButtons = ({
  isMobile,
  closeModal,
}: {
  isMobile?: string;
  closeModal?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(styles["auth-buttons"], {
        [styles.mobile]: isMobile,
      })}
    >
      <Button
        classnameType="small"
        onClick={() => {
          if (closeModal) {
            closeModal();
          }
          navigate("/login");
        }}
      >
        Вход
      </Button>
      <Button
        classnameType="big"
        onClick={() => {
          if (closeModal) {
            closeModal();
          }
          navigate("/registr");
        }}
      >
        Регистрация
      </Button>
    </div>
  );
};

export default AuthButtons;
