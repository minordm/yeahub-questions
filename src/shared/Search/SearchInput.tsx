import type { ChangeEvent } from "react";
import { questionFiltersActions } from "../../app/redux/questionFilters/slice";
import { useAppDispatch, useAppSelector } from "../../app/redux/root";
import Search from "./ui/Search";

const SearchInput = () => {
  const search = useAppSelector((state) => state.questionFilters.search);
  const dispatch = useAppDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(questionFiltersActions.updateSearch(e.target.value));
  };
  return (
    <Search
      placeholder="Введите запрос"
      value={search}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
