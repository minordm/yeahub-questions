import { quizFiltersActions } from "@features/quiz/model/slice";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import Block from "@shared/ui/Block/Block";
import CategoryItem from "@shared/ui/CategoryItem/CategoryItem";

interface IModeProp {
  id: "try" | "new" | "random" | "";
  title: string;
}

const ChooseQuestionMode = () => {
  const mode: IModeProp[] = [
    { id: "try", title: "Повторение" },
    { id: "new", title: "Только новые" },
    { id: "random", title: "Случайные" },
  ];

  const modeId = useAppSelector((state) => state.quizFilters.mode);

  const dispatch = useAppDispatch();

  const handleSelectSpecialization = (
    specializationId: "try" | "new" | "random" | "",
  ) => {
    dispatch(quizFiltersActions.updateMode(specializationId));
  };

  return (
    <Block title="Выберите режим">
      {mode.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          isActive={item.id === modeId}
          onClick={() => handleSelectSpecialization(item.id)}
        />
      ))}
    </Block>
  );
};

export default ChooseQuestionMode;
