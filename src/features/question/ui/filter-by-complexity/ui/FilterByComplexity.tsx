import type { ICategoryProp } from "@entities/category/model/types";
import { questionFiltersActions } from "@entities/question";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import FilterBlock from "@shared/ui/FilterBlock/FilterBlock";

const FilterByComplexity = ({ closeModal }: { closeModal?: () => void }) => {
  const complexity: ICategoryProp[] = [
    { id: "1,2,3", title: "1-3" },
    { id: "4,5,6", title: "4-6" },
    { id: "7,8", title: "7-8" },
    { id: "9,10", title: "9-10" },
  ];

  const complexityId = useAppSelector(
    (state) => state.questionFilters.complexity,
  );

  const dispatch = useAppDispatch();

  const handleSelectComplexity = (id: string) => {
    if (closeModal) {
      closeModal();
    }
    dispatch(questionFiltersActions.updateComplexity(id));
  };

  return (
    <FilterBlock
      title="Сложность"
      filterData={complexity ?? []}
      handleSelectFilter={handleSelectComplexity}
      selectedFilter={complexityId}
    />
  );
};

export default FilterByComplexity;
