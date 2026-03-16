import Content from "./Content/Content";
import Sidebar from "../../shared/Sidebar/Sidebar";
import CategoryList from "../../components/CategoryList/CategoryList";
import { questionActions } from "../../app/redux/question/slice";
import SearchInput from "../../components/Search/SearchInput";
import { useAppSelector } from "../../app/redux/root";

export interface ICategoryProp {
  id: string;
  title: string;
}

const Main = () => {
  const specializationId = useAppSelector(
    (state) => state.question.specializationId,
  );

  const complexity: ICategoryProp[] = [
    { id: "1,2,3", title: "1-3" },
    { id: "4,5,6", title: "4-6" },
    { id: "7,8", title: "7-8" },
    { id: "9,10", title: "9-10" },
  ];

  const rating: ICategoryProp[] = [
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "4", title: "4" },
    { id: "5", title: "5" },
  ];

  return (
    <>
      <Content />
      <Sidebar>
        <SearchInput />

        <Sidebar.Block text="Специализация" skill="specializationId">
          <Sidebar.Title>Специализация</Sidebar.Title>
          <Sidebar.Skill>
            <CategoryList
              url="https://api.yeatwork.ru/specializations"
              updateCategory={questionActions.updateSpecialization}
              // categoryId={"specializationId"}
            />
          </Sidebar.Skill>
        </Sidebar.Block>
        <Sidebar.Block text="Навыки" skill="skill">
          <Sidebar.Title>Навыки</Sidebar.Title>
          <Sidebar.Skill>
            <CategoryList
              // url={`https://api.yeatwork.ru/skills?specializations=11&page=1`}
              url={`https://api.yeatwork.ru/skills?specializations=${specializationId}&page=1`}
              // categoryId={"skill"}
              updateCategory={questionActions.updateSpecialization}
            />
          </Sidebar.Skill>
        </Sidebar.Block>
        <Sidebar.Block text="Уровень сложности" skill="complexity">
          <Sidebar.Title>Уровень сложности</Sidebar.Title>
          <Sidebar.Skill>
            <CategoryList
              list={complexity}
              updateCategory={questionActions.updateSpecialization}
            />
          </Sidebar.Skill>
        </Sidebar.Block>
        <Sidebar.Block text="Рейтинг" skill="rate">
          <Sidebar.Title>Рейтинг</Sidebar.Title>
          <Sidebar.Skill>
            <CategoryList
              list={rating}
              updateCategory={questionActions.updateSpecialization}
            />
          </Sidebar.Skill>
        </Sidebar.Block>
      </Sidebar>
    </>
  );
};

export default Main;
