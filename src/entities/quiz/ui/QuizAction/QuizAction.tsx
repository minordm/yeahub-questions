import type React from "react";
import Button from "@shared/ui/Button/Button";
import LikeIconSvg from "@shared/ui/LikeIconSvg/LikeIconSvg";
import styles from "./styles.module.css";

interface IQuizActionProps {
  isKnown: boolean | null;
  setIsKnown: React.Dispatch<React.SetStateAction<boolean | null>>;
  setIsCompleted: React.Dispatch<React.SetStateAction<number>>;
  curIndex: number;
}

const QuizAction = ({
  setIsCompleted,
  isKnown,
  setIsKnown,
  curIndex,
}: IQuizActionProps) => {
  const handleDislike = () => {
    setIsKnown(false);
    setIsCompleted(curIndex + 1);
  };

  const handleLike = () => {
    setIsKnown(true);
    setIsCompleted(curIndex + 1);
  };

  return (
    <div className={styles["action-buttons"]}>
      <Button
        classnameType="nav"
        onClick={handleDislike}
        isActive={isKnown === false || undefined}
      >
        <LikeIconSvg style={{ transform: "rotate(180deg) scaleX(-100%)" }} />
        Не знаю
      </Button>
      <Button
        classnameType="nav"
        onClick={handleLike}
        isActive={isKnown || undefined}
      >
        <LikeIconSvg />
        Знаю
      </Button>
    </div>
  );
};

export default QuizAction;
