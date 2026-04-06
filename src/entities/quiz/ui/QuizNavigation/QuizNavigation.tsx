import Button from "@shared/ui/Button/Button";
import styles from "./styles.module.css";

interface IQuizNavigationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  curIndex: number;
  setCurIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsKnown: React.Dispatch<React.SetStateAction<boolean | null>>;
  total: number;
  isCompleted: number;
}

const QuizNavigation = ({
  curIndex,
  setCurIndex,
  setIsKnown,
  setIsOpen,
  total,
  isCompleted,
}: IQuizNavigationProps) => {
  const handlePrev = () => {
    setIsOpen(false);
    setCurIndex((prev) => prev - 1);
    setIsKnown(null);
  };

  const handleNext = () => {
    setIsOpen(false);
    setCurIndex((prev) => prev + 1);
    setIsKnown(null);
  };

  return (
    <div className={styles["arrow-buttons"]}>
      <Button
        classnameType="small"
        onClick={handlePrev}
        disabled={curIndex === 0}
      >
        Назад
      </Button>
      <Button
        classnameType="small"
        onClick={handleNext}
        disabled={isCompleted <= curIndex || curIndex + 1 === total}
      >
        Далее
      </Button>
    </div>
  );
};

export default QuizNavigation;
