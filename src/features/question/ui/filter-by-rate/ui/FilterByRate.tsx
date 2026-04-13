import type { ICategoryProp } from "@entities/category/model/types";
import { questionFiltersActions } from "@entities/question";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import FilterBlock from "@shared/ui/FilterBlock/FilterBlock";

const FilterByRate = ({ closeModal }: { closeModal?: () => void }) => {
  const rating: ICategoryProp[] = [
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "4", title: "4" },
    { id: "5", title: "5" },
  ];

  const rateId = useAppSelector((state) => state.questionFilters.rate);

  const dispatch = useAppDispatch();

  const handleSelectRate = (id: string) => {
    if (closeModal) {
      closeModal();
    }
    dispatch(questionFiltersActions.updateRate(id));
  };

  return (
    <FilterBlock
      title="Рейтинг вопросов"
      filterData={rating}
      handleSelectFilter={handleSelectRate}
      selectedFilter={rateId}
    />
  );
};

export default FilterByRate;
