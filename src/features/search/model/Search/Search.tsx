import { useEffect, useState, type ChangeEvent } from "react";
import { questionFiltersActions } from "@entities/question";
import { useAppDispatch, useAppSelector } from "@shared/model";
import useDebounce from "@shared/hooks/useDebounce";
import SearchInput from "@features/search/ui";

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
    <SearchInput
      placeholder="Введите запрос"
      value={value}
      onChange={handleSearch}
    />
  );
};

export default Search;
