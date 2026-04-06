import type { ICategoryProp } from "@entities/category/model/types";
import { questionFiltersActions } from "@entities/question";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import CategoryItem from "@shared/ui/CategoryItem/CategoryItem";
import Block from "@shared/ui/Block/Block";

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
    <Block title="Рейтинг вопросов">
      {rating.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          isActive={rateId === item.id}
          onClick={() => handleSelectRate(item.id)}
        />
      ))}
    </Block>
  );
};

export default FilterByRate;
