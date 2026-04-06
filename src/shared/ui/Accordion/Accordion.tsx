import cn from "classnames";
import { FaChevronDown } from "react-icons/fa6";

import { useRef, useState, type PropsWithChildren } from "react";
import useCalcHeight from "@shared/lib/hooks/useCalcHeight";
import styles from "./styles.module.css";
import Card from "../Card/Card";

type TAccordionProps = PropsWithChildren & {
  title: string;
};

const Accordion = ({ title, children }: TAccordionProps) => {
  const answerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const height = useCalcHeight({ ref: answerRef, isOpen, initialHeight: 0 });

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Card style={{ borderRadius: 8 }}>
      <div className={styles.question} onClick={handleOpen}>
        <h2 className={styles.title}>{title}</h2>
        <FaChevronDown
          className={cn(styles["show-button"], {
            [styles.active]: isOpen,
          })}
        />
      </div>
      <div
        ref={answerRef}
        style={{ height }}
        className={cn(styles.answer, {
          [styles.open]: isOpen,
        })}
      >
        {children}
      </div>
    </Card>
  );
};

export default Accordion;
