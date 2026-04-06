import { useEffect, useState, type ChangeEvent } from "react";
import { questionFiltersActions } from "@entities/question";
import { useAppDispatch, useAppSelector } from "@shared/model/storeFn";
import useDebounce from "@shared/lib/hooks/useDebounce";
import Input from "@shared/ui/Input/Input";

const Search = () => {
  const search = useAppSelector((state) => state.questionFilters.search);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(search);
  const debouncedValue = useDebounce(value, 400);

  useEffect(() => {
    dispatch(questionFiltersActions.updateSearch(debouncedValue));
  }, [debouncedValue, dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Input placeholder="Введите запрос" value={value} onChange={handleSearch} />
  );
};

export default Search;
