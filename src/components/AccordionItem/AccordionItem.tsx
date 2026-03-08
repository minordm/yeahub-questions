import type { FC, Ref } from "react";

import cn from "classnames";
import { FaChevronDown } from "react-icons/fa6";
import styles from "./AccordionItem.module.css";
import type { IQuestionProps } from "./AccordionButton";
import { HtmlRenderer } from "../HtmlRenderer/HtmlRenderer";

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
            <div className={styles.props}>
              Рейтинг: <span>{rate}</span>
            </div>
            <div className={styles.props}>
              Сложность:&nbsp;<span>{complexity}</span>
            </div>
          </div>
          <button className={styles.close}>
            <img src="/close.svg" alt="" />
          </button>
        </div>
        <HtmlRenderer html={shortAnswer} />
        {/* {RawHtmlComponent({ htmlString: shortAnswer })} */}
        {/* {parse(shortAnswer)} */}
        {/* <img src="/example.png" alt="" className={styles["answer-img"]} />
        <p className={styles.desc}>
          Virtual DOM (виртуальный DOM) — это программная концепция,
          используемая в разработке веб-приложений для повышения эффективности
          обновлений интерфейса. Это представление реального DOM (структуры
          документа, отображаемого в браузере) в памяти, которое позволяет
          оптимизировать изменения, минимизируя взаимодействие с реальным DOM,
          что ускоряет рендеринг и обновление страниц. При изменении данных
          приложения Virtual DOM сравнивает новое состояние с предыдущим и
          обновляет только те части реального DOM, которые изменились, вместо
          перерисовки всего документа.
        </p> */}
      </div>
    </div>
  );
};

export default AccordionItem;
