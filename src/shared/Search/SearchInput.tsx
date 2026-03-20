import { useEffect, useState, type ChangeEvent } from "react";
import { questionFiltersActions } from "../../app/redux/questionFilters/slice";
import { useAppDispatch, useAppSelector } from "../../app/redux/root";
import { useDebounce } from "../hooks/useDebounce";
import Search from "./ui/Search";

const SearchInput = () => {
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
    <Search
      placeholder="Введите запрос"
      value={value}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
