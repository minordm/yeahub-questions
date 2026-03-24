import Sidebar from "@shared/Sidebar/Sidebar";
import Search from "@features/search";
import { CategoryItem } from "@entities/category";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/model";
import { createSkeleton } from "@shared/utils/createSkeleton";
import { useGetCategoryQuery } from "@entities/category";
import {
  questionFiltersActions,
  type TQuestionFiltersKey,
} from "@entities/question";

interface ICategoryProp {
  id: string;
  title: string;
}

interface IToggleShowMoreCategoriesProps {
  cb: React.Dispatch<React.SetStateAction<number>>;
  totalCategories: number;
}

const SidebarMain = ({ closeModal }: { closeModal?: () => void }) => {
  const specializationId = useAppSelector(
    (state) => state.questionFilters.specializationId,
  );
  const skillId = useAppSelector((state) => state.questionFilters.skill);
  const complexityId = useAppSelector(
    (state) => state.questionFilters.complexity,
  );
  const rateId = useAppSelector((state) => state.questionFilters.rate);

  const dispatch = useAppDispatch();

  const [specLimit, setSpecLimit] = useState(5);
  const [skillLimit, setSkillLimit] = useState(5);

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

  const {
    data: spec,
    error: errorSpec,
    isLoading: isLoadingSpec,
  } = useGetCategoryQuery({
    categoryQuery: "https://api.yeatwork.ru/specializations",
    limit: specLimit,
  });

  const {
    data: skills,
    error: errorSkills,
    isLoading: isLoadingSkills,
  } = useGetCategoryQuery({
    categoryQuery: `https://api.yeatwork.ru/skills?specializations=${specializationId}`,
    limit: skillLimit,
  });

  const toggleMoreCategories = ({
    cb,
    totalCategories,
  }: IToggleShowMoreCategoriesProps) => {
    cb((prevState) => (prevState <= 5 ? totalCategories : 5));
  };

  const selectCategory = ({
    key,
    value,
  }: {
    key: TQuestionFiltersKey;
    value: string | number;
  }) => {
    dispatch(questionFiltersActions.updateSpecialization({ key, value }));
  };

  if (errorSpec) return <p>Не удалось загрузить специальности</p>;
  if (errorSkills) return <p>Не удалось загрузить скиллы</p>;

  return (
    <Sidebar>
      <Search />

      <Sidebar.Block>
        <Sidebar.Title>Специализация</Sidebar.Title>
        <Sidebar.Skill>
          {isLoadingSpec
            ? createSkeleton(5, 26, 200)
            : spec?.data.map((specialization) => (
                <CategoryItem
                  title={specialization.title}
                  key={specialization.id}
                  isActive={specializationId === specialization.id}
                  onClick={() => {
                    dispatch(questionFiltersActions.reset());
                    if (closeModal) {
                      closeModal();
                    }
                    selectCategory({
                      key: "specializationId",
                      value: specialization.id,
                    });
                  }}
                />
              ))}
        </Sidebar.Skill>
        <Sidebar.Button
          onClick={() =>
            toggleMoreCategories({
              cb: setSpecLimit,
              totalCategories: spec?.total ?? 5,
            })
          }
        >
          {specLimit > 5 ? "Скрыть" : "Посмотреть все"}
        </Sidebar.Button>
      </Sidebar.Block>
      <Sidebar.Block>
        <Sidebar.Title>Навыки</Sidebar.Title>
        <Sidebar.Skill>
          {isLoadingSkills
            ? createSkeleton(5, 26, 200)
            : skills?.data.map((skill) => (
                <CategoryItem
                  title={skill.title}
                  key={skill.id}
                  isActive={skillId === skill.id}
                  onClick={() => {
                    if (closeModal) {
                      closeModal();
                    }
                    selectCategory({ key: "skill", value: skill.id });
                  }}
                />
              ))}
        </Sidebar.Skill>
        <Sidebar.Button
          onClick={() =>
            toggleMoreCategories({
              cb: setSkillLimit,
              totalCategories: skills?.total ?? 5,
            })
          }
        >
          {skillLimit > 5 ? "Скрыть" : "Посмотреть все"}
        </Sidebar.Button>
      </Sidebar.Block>
      <Sidebar.Block>
        <Sidebar.Title>Уровень сложности</Sidebar.Title>
        <Sidebar.Skill>
          {complexity.map((item) => (
            <CategoryItem
              title={item.title}
              key={item.id}
              isActive={complexityId === item.id}
              onClick={() => {
                if (closeModal) {
                  closeModal();
                }
                selectCategory({ key: "complexity", value: item.id });
              }}
            />
          ))}
        </Sidebar.Skill>
      </Sidebar.Block>
      <Sidebar.Block>
        <Sidebar.Title>Рейтинг</Sidebar.Title>
        <Sidebar.Skill>
          {rating.map((item) => (
            <CategoryItem
              title={item.title}
              key={item.id}
              isActive={rateId === item.id}
              onClick={() => {
                if (closeModal) {
                  closeModal();
                }
                selectCategory({ key: "rate", value: item.id });
              }}
            />
          ))}
        </Sidebar.Skill>
      </Sidebar.Block>
    </Sidebar>
  );
};

export default SidebarMain;
