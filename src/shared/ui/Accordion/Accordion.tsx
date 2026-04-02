import cn from "classnames";
import { FaChevronDown } from "react-icons/fa6";

import {
  useImperativeHandle,
  useState,
  type PropsWithChildren,
  type Ref,
} from "react";
import styles from "./styles.module.css";

type TAccordionProps = PropsWithChildren & {
  handleOpen: () => void;
  answerRef: Ref<HTMLDivElement>;
  height: number;
  title: string;
};

const Accordion = ({
  handleOpen,
  answerRef,
  height,
  title,
  children,
}: TAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(null, () => {
    return {
      openAnswer() {
        setIsOpen(true);
      },
      closeAnswer() {
        setIsOpen(false);
      },
    };
  });

  return (
    <div className={styles.accordion}>
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
    </div>
  );
};

export default Accordion;
