import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/redux/root";
import { questionFiltersActions } from "../../../app/redux/questionFilters/slice";

import styles from "./Sidebar.module.css";
import { questionDetailActions } from "../../../app/redux/questionDetail/slice";
import Sidebar from "../../../shared/Sidebar/Sidebar";
import QuestionProperty from "../../../shared/QuestionProperty/QuestionProperty";
import CategoryItem from "../../../shared/CategoryItem/CategoryItem";
import KeyWordButton from "../../../shared/KeyWordButton/KeyWordButton";
import Info from "../Info/Info";

const SidebarQuestionDetail = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const complexity = useAppSelector((state) => state.questionDetail.complexity);
  const rate = useAppSelector((state) => state.questionDetail.rate);
  const skills = useAppSelector((state) => state.questionDetail.skills);
  const keywords = useAppSelector((state) => state.questionDetail.keywords);

  const handleSearch = (search: string) => {
    dispatch(questionFiltersActions.reset());
    dispatch(questionFiltersActions.updateSearch(search));
    dispatch(questionDetailActions.reset());
    navigate("/");
  };

  return (
    <div className={styles["sidebar__container"]}>
      <Sidebar>
        <Sidebar.Block text="Уровень" skill={"rate"}>
          <Sidebar.Title>Уровень</Sidebar.Title>
          <Sidebar.Skill>
            <QuestionProperty property="Сложность" value={complexity} />
            <QuestionProperty property="Рейтинг" value={rate} />
          </Sidebar.Skill>
        </Sidebar.Block>
        <Sidebar.Block text="Навыки" skill="skill">
          <Sidebar.Title>Навыки</Sidebar.Title>
          <Sidebar.Skill>
            {skills.map((skill) => (
              <CategoryItem
                key={skill.id}
                title={skill.title}
                onClick={() => handleSearch(skill.title)}
              />
            ))}
          </Sidebar.Skill>
        </Sidebar.Block>
        <Sidebar.Block text="Ключевые слова" skill="complexity">
          <Sidebar.Title>Ключевые слова</Sidebar.Title>
          <Sidebar.Skill>
            {keywords.map((keyword) => (
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

export default SidebarQuestionDetail;
