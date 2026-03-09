import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Content.module.css";

import cn from "classnames";
import { FaChevronDown } from "react-icons/fa6";

const Content = () => {
  const [height, setHeight] = useState(140);
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    if (isOpen && answerRef.current) {
      setHeight(answerRef.current.scrollHeight + 30);
    } else {
      setHeight(140);
    }
  }, [isOpen]);

  return (
    <>
      {/* <button>Назад</button> */}
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <img src="/question.png" alt="" width={160} height={160} />
          <div className={styles.title}>
            <h1>Что такое Virtual DOM, и как он работает?</h1>
            <p>Вопрос проверяет знание React под капотом</p>
          </div>
        </div>

        <div className={styles.action}>
          <button className={styles.button}>
            <img src="/arrow-left.svg" alt="" />
            Предыдущий
          </button>
          <button className={styles.button}>
            Следующий
            <img src="/arrow-right.svg" alt="" />
          </button>
        </div>

        <div className={styles.questions}>
          <div className={styles.short}>
            <h2>Краткий ответ</h2>
            <div className="">
              Virtual DOM (виртуальный DOM) — это программная концепция,
              используемая в разработке веб-приложений для повышения
              эффективности обновлений интерфейса. Это представление реального
              DOM (структуры документа, отображаемого в браузере) в памяти,
              которое позволяет оптимизировать изменения, минимизируя
              взаимодействие с реальным DOM, что ускоряет рендеринг и обновление
              страниц. При изменении данных приложения Virtual DOM сравнивает
              новое состояние с предыдущим и обновляет только те части реального
              DOM, которые изменились, вместо перерисовки всего документа.
            </div>
          </div>
          <div className={styles.long}>
            <h2>Развёрнутый ответ</h2>
            <div
              className={styles["long-answer"]}
              ref={answerRef}
              style={{ height }}
            >
              Virtual DOM (виртуальное DOM) - это концепция, используемая в
              библиотеках и фреймворках, таких как React, для оптимизации
              обновлений реального DOM (Document Object Model) и повышения
              производительности веб-приложений.
              <br />
              <br />
              Реальный DOM — это представление структуры веб-страницы в браузере
              в виде дерева объектов. Когда состояние приложения меняется и
              требуется обновление интерфейса, браузер выполняет изменения
              непосредственно в реальном DOM. Однако многократные и частые
              обновления реального DOM могут быть затратными с точки зрения
              производительности, особенно для больших и сложных интерфейсов.
              <br />
              <br />
              Виртуальное DOM решает эту проблему следующим образом:
              <br />
              <br />
              Создание виртуального DOM: При изменении состояния приложения
              React создаёт виртуальное представление DOM-структуры, которая
              является легковесной копией реального DOM.
              <br />
              <br />
              Сравнение виртуального DOM: React сравнивает предыдущее состояние
              виртуального DOM с новым состоянием, выявляя, какие части
              интерфейса были изменены.
              <br />
              <br />
              Генерация разницы (патч): На основе сравнения React создаёт
              минимальный набор изменений, необходимых для обновления
              виртуального DOM согласно новому состоянию.
              <br />
              <br />
              Применение изменений: Созданные изменения применяются к реальному
              DOM только одним обновлением, что позволяет избежать множественных
              манипуляций с реальным DOM.
              <br />
              <br />
              Использование виртуального DOM позволяет значительно улучшить
              производительность, так как обновления реального DOM происходят
              только в необходимых местах. Это также делает разработку более
              удобной и предсказуемой, поскольку разработчику не нужно ручным
              образом управлять множеством изменений на реальном DOM.l
              <br />
              <br />
              Использование виртуального DOM позволяет значительно улучшить
              производительность, так как обновления реального DOM происходят
              только в необходимых местах. Это также делает разработку более
              удобной и предсказуемой, поскольку разработчику не нужно ручным
              образом управлять множеством изменений на реальном DOM.l
            </div>
            <button className={styles["show-button"]} onClick={handleOpen}>
              {!isOpen ? "Развернуть" : "Свернуть"}
              <FaChevronDown
                className={cn(styles.arrow, {
                  [styles.open]: isOpen,
                })}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
