import { questionFiltersActions } from "@entities/question";
import { useGetSpecializationsQuery } from "@entities/specialization";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import Button from "@shared/ui/Button/Button";
import CategoryItem from "@shared/ui/CategoryItem/CategoryItem";
import Block from "@shared/ui/Block/Block";
import { createSkeleton } from "@shared/lib/utils/createSkeleton";
import { useState } from "react";

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
    <Block
      title="Специализация"
      renderButton={() => (
        <Button
          classnameType="small"
          onClick={() =>
            setSpecializationLimit((prevState) =>
              prevState <= 5 ? (specializations?.total ?? 5) : 5,
            )
          }
        >
          {specializationLimit > 5 ? "Скрыть" : "Посмотреть все"}
        </Button>
      )}
    >
      {isLoading
        ? createSkeleton(5, 26, 200)
        : specializations?.data.map((specialization) => (
            <CategoryItem
              key={specialization.id}
              title={specialization.title}
              isActive={specializationId === specialization.id}
              onClick={() => handleSelectSpecialization(specialization.id)}
            />
          ))}
    </Block>
  );
};

export default FilterBySpecialization;
