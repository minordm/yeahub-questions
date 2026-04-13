import Block from "../Block/Block";
import Button from "../Button/Button";
import { createSkeleton } from "@shared/lib/utils/createSkeleton";
import CategoryItem from "../CategoryItem/CategoryItem";
import type React from "react";

interface IFilterItem<T extends string | number> {
  id: T;
  title: string;
}

interface IFilterBlockProps<T extends string | number> {
  title: string;
  filterData: IFilterItem<T>[];
  selectedFilter: T | null;
  handleSelectFilter: (filterId: T) => void;
  isLoading?: boolean;
  totalLimit?: number;
  filterLimit?: number;
  setFilterLimit?: React.Dispatch<React.SetStateAction<number>>;
}

const FilterBlock = <T extends string | number>({
  title,
  filterLimit,
  setFilterLimit,
  filterData,
  totalLimit,
  isLoading = false,
  handleSelectFilter,
  selectedFilter,
}: IFilterBlockProps<T>) => {
  return (
    <Block
      title={title}
      renderButton={() => {
        if (filterLimit && setFilterLimit) {
          return (
            <Button
              classnameType="small"
              onClick={() =>
                setFilterLimit((prevState) =>
                  prevState <= 5 ? (totalLimit ?? 5) : 5,
                )
              }
            >
              {filterLimit > 5 ? "Скрыть" : "Посмотреть все"}
            </Button>
          );
        }
      }}
    >
      {isLoading
        ? createSkeleton(5, 26, 200)
        : filterData.map((filter) => (
            <CategoryItem
              key={filter.id}
              title={filter.title}
              isActive={selectedFilter === filter.id}
              onClick={() => handleSelectFilter(filter.id)}
            />
          ))}
    </Block>
  );
};

export default FilterBlock;
