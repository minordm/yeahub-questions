import type { ICategoryProp } from "@entities/category/model/types";
import { questionFiltersActions } from "@entities/question";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import CategoryItem from "@shared/ui/CategoryItem/CategoryItem";
import SidebarBlock from "@shared/ui/SidebarBlock/SidebarBlock";

const FilterByComplexity = ({ closeModal }: { closeModal: () => void }) => {
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
    <SidebarBlock title="Сложность">
      {complexity.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          isActive={complexityId === item.id}
          onClick={() => handleSelectComplexity(item.id)}
        />
      ))}
    </SidebarBlock>
  );
};

export default FilterByComplexity;
