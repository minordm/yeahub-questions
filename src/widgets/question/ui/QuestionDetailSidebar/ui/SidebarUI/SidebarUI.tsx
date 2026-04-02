import { useNavigate } from "react-router";
import { useAppDispatch } from "@shared/model/storeFn";
import {
  questionFiltersActions,
  QuestionProperty,
  type IQuestion,
} from "@entities/question";

import CategoryItem from "@shared/ui/CategoryItem/CategoryItem";
import { Info } from "@entities/author";
import SidebarBlock from "@shared/ui/SidebarBlock/SidebarBlock";
import Button from "@shared/ui/Button/Button";
import styles from "./styles.module.css";

interface ISidebarQuestionDetailProps {
  question?: IQuestion;
}

const SidebarUI = ({ question }: ISidebarQuestionDetailProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = (search: string) => {
    dispatch(questionFiltersActions.updateSearch(search));
    navigate("/");
  };

  return (
    <div className={styles["sidebar__container"]}>
      <aside className={styles.sidebar}>
        <SidebarBlock title="Уровень">
          <QuestionProperty
            complexity={question?.complexity ?? 0}
            rate={question?.rate ?? 0}
          />
        </SidebarBlock>
        <SidebarBlock title="Навыки">
          {question?.questionSkills.map((skill) => (
            <CategoryItem
              key={skill.id}
              title={skill.title}
              onClick={() => handleSearch(skill.title)}
            />
          ))}
        </SidebarBlock>

        <SidebarBlock title="Ключевые слова">
          {question?.keywords.map((keyword) => (
            <Button
              key={keyword}
              classnameType="small"
              text={`#${keyword}`}
              onClick={() => handleSearch(keyword)}
            />
          ))}
        </SidebarBlock>
      </aside>
      <Info />
    </div>
  );
};

export default SidebarUI;
