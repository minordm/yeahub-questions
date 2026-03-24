import cn from "classnames";
import { FaChevronDown } from "react-icons/fa6";
import { HtmlRenderer } from "@shared/ui/HtmlRenderer/HtmlRenderer";
import { QuestionProperty, type TQuestionProps } from "@entities/question";

import styles from "./styles.module.css";
import type { Ref } from "react";

export interface IAccordionItemProps extends Pick<
  TQuestionProps,
  "title" | "rate" | "complexity" | "shortAnswer"
> {
  height: number;
  ref: Ref<HTMLDivElement> | null;
  isOpen: boolean;
  open: () => void;
  onNavigate: () => void;
}

const AccordionItem = ({
  isOpen,
  open,
  ref,
  height,
  title,
  rate,
  complexity,
  shortAnswer,
  onNavigate,
}: IAccordionItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.question} onClick={open}>
        <h2 className={styles.title}>{title}</h2>
        <FaChevronDown
          className={cn(styles["show-button"], {
            [styles.active]: isOpen,
          })}
        />
      </div>
      <div
        ref={ref}
        style={{ height }}
        className={cn(styles.answer, {
          [styles.open]: isOpen,
        })}
      >
        <div className={styles.action}>
          <QuestionProperty property="Рейтинг" value={rate} />
          <QuestionProperty property="Сложность" value={complexity} />
        </div>
        <HtmlRenderer html={shortAnswer} />
        <button className={styles.close} onClick={onNavigate}>
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default AccordionItem;
