import { questionFiltersActions } from "@entities/question";
import { useGetSkillsQuery } from "@entities/skills";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import { useState } from "react";
import FilterBlock from "@shared/ui/FilterBlock/FilterBlock";

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
    <FilterBlock
      title="Выберите навыки"
      filterData={skills?.data ?? []}
      handleSelectFilter={handleSelectSkill}
      selectedFilter={skillId}
      filterLimit={skillsLimit}
      setFilterLimit={setSkillsLimit}
      isLoading={isLoading}
      totalLimit={skills?.total}
    />
  );
};

export default FilterBySkills;
