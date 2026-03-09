import CategoryItem from "../../shared/CategoryItem/CategoryItem";
import KeyWordButton from "../../shared/KeyWordButton/KeyWordButton";
import QuestionProperty from "../../shared/QuestionProperty/QuestionProperty";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Content from "./Content/Content";
import Info from "./Info/Info";

import styles from "./Question.module.css";

const Question = () => {
  return (
    <>
      <Content />
      <div className={styles["sidebar__container"]}>
        <Sidebar text="111">
          <Sidebar.Block>
            <Sidebar.Title>Уровень</Sidebar.Title>
            <Sidebar.Skill>
              <QuestionProperty property="Сложность" value={10} />
              <QuestionProperty property="Рейтинг" value={8} />
            </Sidebar.Skill>
          </Sidebar.Block>
          <Sidebar.Block>
            <Sidebar.Title>Навыки</Sidebar.Title>
            <Sidebar.Skill>
              <CategoryItem item={{ title: "React" }} />
              <CategoryItem item={{ title: "Figma", imageSrc: "/" }} />
              <CategoryItem item={{ title: "CSS" }} />
            </Sidebar.Skill>
          </Sidebar.Block>
          <Sidebar.Block>
            <Sidebar.Title>Ключевые слова</Sidebar.Title>
            <Sidebar.Skill>
              <KeyWordButton>Virtual DOM</KeyWordButton>
              <KeyWordButton>Виртуальное DOM</KeyWordButton>
              <KeyWordButton>React</KeyWordButton>
            </Sidebar.Skill>
          </Sidebar.Block>
          <div className={styles.author}>
            Автор: <span>Дмитрий Мусиенко</span>
          </div>
        </Sidebar>
        <Info />
      </div>
    </>
  );
};

export default Question;
