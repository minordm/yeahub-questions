import { useNavigate } from "react-router";
import { useAppDispatch } from "@shared/model/storeFn";
import { questionFiltersActions, QuestionProperty } from "@entities/question";
import type { IQuestion } from "@shared/model/types";

import CategoryItem from "@shared/ui/CategoryItem/CategoryItem";
import Block from "@shared/ui/Block/Block";
import Button from "@shared/ui/Button/Button";
import Info from "../Info/Info";
import styles from "./styles.module.css";

interface ISidebarQuestionDetailProps {
  question?: IQuestion;
}

const SidebarUI = ({ question }: ISidebarQuestionDetailProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = (search: string) => {
    dispatch(questionFiltersActions.updateSearch(search));
    navigate("/questions");
  };

  return (
    <div className={styles["sidebar__container"]}>
      <aside className={styles.sidebar}>
        <Block title="Уровень">
          <QuestionProperty
            complexity={question?.complexity ?? 0}
            rate={question?.rate ?? 0}
          />
        </Block>
        <Block title="Навыки">
          {question?.questionSkills.map((skill) => (
            <CategoryItem
              key={skill.id}
              title={skill.title}
              onClick={() => handleSearch(skill.title)}
            />
          ))}
        </Block>

        <Block title="Ключевые слова">
          {question?.keywords.map((keyword) => (
            <Button
              key={keyword}
              classnameType="small"
              onClick={() => handleSearch(keyword)}
            >{`#${keyword}`}</Button>
          ))}
        </Block>
      </aside>
      <Info />
    </div>
  );
};

export default SidebarUI;
