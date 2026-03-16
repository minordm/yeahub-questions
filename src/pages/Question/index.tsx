import { useNavigate } from "react-router";
// import CategoryList from "../../components/CategoryList/CategoryList";
// import CategoryItem from "../../shared/CategoryItem/CategoryItem";
import KeyWordButton from "../../shared/KeyWordButton/KeyWordButton";
import QuestionProperty from "../../shared/QuestionProperty/QuestionProperty";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Content from "./Content/Content";
import Info from "./Info/Info";

import styles from "./Question.module.css";
import { useAppDispatch, useAppSelector } from "../../app/redux/root";
import { questionActions } from "../../app/redux/question/slice";

const Question = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const specializationId = useAppSelector(
    (state) => state.question.specializationId,
  );

  const complexity = useAppSelector(
    (state) => state.question.complexityQuestion,
  );
  const rate = useAppSelector((state) => state.question.rateQuestion);
  const skills = useAppSelector((state) => state.question.skillsQuestion);
  const keywords = useAppSelector((state) => state.question.keywordsQuestion);

  // получать данные из вопроса
  console.log(skills);

  const handleGetKeywordsQuestion = (search: string) => {
    dispatch(questionActions.reset());
    dispatch(questionActions.updateSearch(search));
    navigate("/");
  };

  return (
    <>
      <Content />
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
              {/* <CategoryList
                url={`https://api.yeatwork.ru/skills?specializations=${specializationId}&page=1`}
              /> */}
            </Sidebar.Skill>
          </Sidebar.Block>
          <Sidebar.Block text="Ключевые слова" skill="complexity">
            <Sidebar.Title>Ключевые слова</Sidebar.Title>
            <Sidebar.Skill>
              {keywords.map((keyword) => (
                <KeyWordButton
                  title={keyword}
                  onClick={() => handleGetKeywordsQuestion(keyword)}
                />
              ))}
            </Sidebar.Skill>
          </Sidebar.Block>
        </Sidebar>
        <Info />
      </div>
    </>
  );
};

export default Question;
