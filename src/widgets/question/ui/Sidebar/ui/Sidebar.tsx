import { useNavigate } from "react-router";
import { useAppDispatch } from "@shared/model";
import {
  questionFiltersActions,
  QuestionProperty,
  type IQuestion,
} from "@entities/question";

import styles from "./Sidebar.module.css";
import Sidebar from "@shared/Sidebar/Sidebar";
import { CategoryItem } from "@entities/category";
import { KeyWordButton } from "@features/question";
import { Info } from "@widgets/question";

interface ISidebarQuestionDetailProps {
  question?: IQuestion;
}

const SidebarUI = ({ question }: ISidebarQuestionDetailProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = (search: string) => {
    dispatch(questionFiltersActions.reset());
    dispatch(questionFiltersActions.updateSearch(search));
    navigate("/");
  };

  return (
    <div className={styles["sidebar__container"]}>
      <Sidebar>
        <Sidebar.Block>
          <Sidebar.Title>Уровень</Sidebar.Title>
          <Sidebar.Skill>
            <QuestionProperty
              property="Сложность"
              value={question?.complexity}
            />
            <QuestionProperty property="Рейтинг" value={question?.rate} />
          </Sidebar.Skill>
        </Sidebar.Block>
        <Sidebar.Block>
          <Sidebar.Title>Навыки</Sidebar.Title>
          <Sidebar.Skill>
            {question?.questionSkills.map((skill) => (
              <CategoryItem
                key={skill.id}
                title={skill.title}
                onClick={() => handleSearch(skill.title)}
              />
            ))}
          </Sidebar.Skill>
        </Sidebar.Block>
        <Sidebar.Block>
          <Sidebar.Title>Ключевые слова</Sidebar.Title>
          <Sidebar.Skill>
            {question?.keywords.map((keyword) => (
              <KeyWordButton
                key={keyword}
                title={keyword}
                onClick={() => handleSearch(keyword)}
              />
            ))}
          </Sidebar.Skill>
        </Sidebar.Block>
      </Sidebar>
      <Info />
    </div>
  );
};

export default SidebarUI;
