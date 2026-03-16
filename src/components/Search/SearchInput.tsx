import type { ChangeEvent } from "react";
import { questionActions } from "../../app/redux/question/slice";
import { useAppDispatch, useAppSelector } from "../../app/redux/root";
import Search from "./ui/Search";

const SearchInput = () => {
  const search = useAppSelector((state) => state.question.search);
  const dispatch = useAppDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.updateSearch(e.target.value));
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
