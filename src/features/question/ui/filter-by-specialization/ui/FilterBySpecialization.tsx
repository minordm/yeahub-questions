import { questionFiltersActions } from "@entities/question";
import { useGetSpecializationsQuery } from "@entities/specialization";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import { useState } from "react";
import FilterBlock from "@shared/ui/FilterBlock/FilterBlock";

const FilterBySpecialization = ({
  closeModal,
}: {
  closeModal?: () => void;
}) => {
  const [specializationLimit, setSpecializationLimit] = useState(5);

  const specializationId = useAppSelector(
    (state) => state.questionFilters.specializationId,
  );

  const {
    data: specializations,
    error,
    isLoading,
  } = useGetSpecializationsQuery({
    limit: specializationLimit,
  });
  const dispatch = useAppDispatch();

  const handleSelectSpecialization = (specializationId: number) => {
    dispatch(questionFiltersActions.reset());
    if (closeModal) {
      closeModal();
    }
    dispatch(questionFiltersActions.updateSpecialization(specializationId));
  };

  if (error) return <p>Не удалось загрузить специальности</p>;

  return (
    <FilterBlock
      title="Специализация"
      filterData={specializations?.data ?? []}
      handleSelectFilter={handleSelectSpecialization}
      selectedFilter={specializationId}
      isLoading={isLoading}
      filterLimit={specializationLimit}
      setFilterLimit={setSpecializationLimit}
      totalLimit={specializations?.total}
    />
  );
};

export default FilterBySpecialization;
