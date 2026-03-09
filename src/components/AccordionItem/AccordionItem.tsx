import type { FC, Ref } from "react";

import cn from "classnames";
import { FaChevronDown } from "react-icons/fa6";
import styles from "./AccordionItem.module.css";
import type { IQuestionProps } from "./AccordionButton";
import { HtmlRenderer } from "../HtmlRenderer/HtmlRenderer";
import { useNavigate } from "react-router";
import QuestionProperty from "../../shared/QuestionProperty/QuestionProperty";

interface IAccordionItemProps {
  height: number;
  ref: Ref<HTMLDivElement> | null;
  isOpen: boolean;
  open: () => void;
}

// function RawHtmlComponent({ htmlString }: { htmlString: string }) {
//   return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
// }

const AccordionItem: FC<IAccordionItemProps & IQuestionProps> = ({
  isOpen,
  open,
  ref,
  height,
  title,
  rate,
  complexity,
  shortAnswer,
  id,
}) => {
  const navigation = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.question} onClick={open}>
        <h2>
          <img src="/ball.svg" alt="" />
          {title}
        </h2>
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
          <div className={styles.setting}>
            <QuestionProperty property="Рейтинг" value={rate} />
            <QuestionProperty property="Сложность" value={complexity} />
          </div>
          <button className={styles.close} onClick={() => navigation(`/${id}`)}>
            <img src="/close.svg" alt="" />
          </button>
        </div>
        <HtmlRenderer html={shortAnswer} />
        {/* {RawHtmlComponent({ htmlString: shortAnswer })} */}
        {/* {parse(shortAnswer)} */}
      </div>
    </div>
  );
};

export default AccordionItem;
