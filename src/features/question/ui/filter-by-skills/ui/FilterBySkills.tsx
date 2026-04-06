import { questionFiltersActions } from "@entities/question";
import { useGetSkillsQuery } from "@entities/skills";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import Button from "@shared/ui/Button/Button";
import CategoryItem from "@shared/ui/CategoryItem/CategoryItem";
import Block from "@shared/ui/Block/Block";
import { createSkeleton } from "@shared/lib/utils/createSkeleton";
import { useState } from "react";

const FilterBySkills = ({ closeModal }: { closeModal?: () => void }) => {
  const [skillsLimit, setSkillsLimit] = useState(5);

  const specializationId = useAppSelector(
    (state) => state.questionFilters.specializationId,
  );
  const skillId = useAppSelector((state) => state.questionFilters.skill);

  const {
    data: skills,
    error,
    isLoading,
  } = useGetSkillsQuery({
    specializationId: specializationId,
    limit: skillsLimit,
  });
  const dispatch = useAppDispatch();

  const handleSelectSkill = (skillId: number) => {
    if (closeModal) {
      closeModal();
    }
    dispatch(questionFiltersActions.updateSkill(skillId));
  };

  if (error) return <p>Не удалось загрузить скиллы</p>;

  return (
    <Block
      title="Выберите навыки"
      renderButton={() => (
        <Button
          classnameType="small"
          onClick={() =>
            setSkillsLimit((prevState) =>
              prevState <= 5 ? (skills?.total ?? 5) : 5,
            )
          }
        >
          {skillsLimit > 5 ? "Скрыть" : "Посмотреть все"}
        </Button>
      )}
    >
      {isLoading
        ? createSkeleton(5, 26, 200)
        : skills?.data.map((skill) => (
            <CategoryItem
              key={skill.id}
              title={skill.title}
              isActive={skillId === skill.id}
              onClick={() => handleSelectSkill(skill.id)}
            />
          ))}
    </Block>
  );
};

export default FilterBySkills;
