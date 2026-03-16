// import CategoryItem from "../../shared/CategoryItem/CategoryItem";
import { useGetCategoryQuery } from "../../app/redux/category/api";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/root";
import CategoryUI from "./ui/CategoryUI";
import { useSidebarContext } from "../../shared/Sidebar/context";
import type { ICategoryProp } from "../../pages/Main/Main";

const CategoryList = ({
  url,
  list,
  updateCategory,
  // categoryId,
}: {
  url?: string;
  list?: ICategoryProp[];
  // updateCategory: (id: number) => void;
}) => {
  const { skill } = useSidebarContext();
  const selectedCategory = useAppSelector((state) => state.question[skill]);

  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState<number>(5);
  const {
    data: category,
    error,
    isLoading,
  } = useGetCategoryQuery(
    { categoryQuery: url ?? "", limit: limit },
    { skip: !url },
  );

  const toggleMoreCategories = () => {
    setLimit((prevState) => (prevState <= 5 ? (category?.total ?? 5) : 5));
  };

  const handleSelect = (id) => {
    dispatch(updateCategory({ key: skill, value: id }));
  };

  if (isLoading) return <>Загрузка</>;
  if (error) return <>{JSON.stringify(error)}</>;

  return (
    <CategoryUI
      categories={category ? category.data : list}
      onSelect={handleSelect}
      toggleMoreCategories={toggleMoreCategories}
      totalPages={category?.total}
      selectedCategory={selectedCategory}
    />
  );
};

export default CategoryList;
