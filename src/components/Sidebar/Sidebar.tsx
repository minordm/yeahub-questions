import type { FC } from "react";
import Search from "../Search/Search";
import CategoryBlock from "../CategoryBlock/CategoryBlock";
import styles from "./Sidebar.module.css";

const Sidebar: FC<{
  search: string;
  setSearch: (searchText: string) => void;
  selectedSpecialization: string;
  setSelectedSpecialization: (specialization: string) => void;
  selectSkill: string;
  setSelectSkill: (skill: string) => void;
  selectComplexity: string;
  setSelectComplexity: (complexity: string) => void;
  selectRating: string;
  setSelectRating: (rating: string) => void;
}> = ({
  search,
  setSearch,
  selectedSpecialization,
  setSelectedSpecialization,
  selectSkill,
  setSelectSkill,
  selectComplexity,
  setSelectComplexity,
  selectRating,
  setSelectRating,
}) => {
  // const [selectedSpecialization, setSelectedSpecialization] =
  //   useState<string>("11");
  // const [selectSkill, setSelectSkill] = useState<string>("");
  // const [selectComplexity, setSelectComplexity] = useState<string>("");
  // const [selectRating, setSelectRating] = useState<string>("");

  const complexity = [
    { id: "1,2,3", title: "1-3" },
    { id: "4,5,6", title: "4-6" },
    { id: "7,8", title: "7-8" },
    { id: "9,10", title: "9-10" },
  ];
  const rating = [
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "4", title: "4" },
    { id: "5", title: "5" },
  ];
  // const state = ["Изученные", "Не изученные", "Все"];

  // console.log("специализация", selectedSpecialization);
  // console.log("скли", selectSkill);
  // console.log("сложность", selectComplexity);
  // console.log("рейтинг", selectRating);

  const toggleCategory = (id: string) => {
    if (!selectRating.includes(id)) {
      setSelectRating(id);
    } else {
      setSelectRating("");
    }
  };

  const toggleCategory1 = (id: string) => {
    if (!selectComplexity.includes(id)) {
      setSelectComplexity(id);
    } else {
      setSelectComplexity("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <Search
        placeholder="Введите запрос..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <CategoryBlock
        selectedCategory={selectedSpecialization}
        selectCategory={setSelectedSpecialization}
        url="https://api.yeatwork.ru/specializations?page=1"
        title="Специализация"
      />
      <CategoryBlock
        selectedCategory={selectSkill}
        selectCategory={setSelectSkill}
        url={`https://api.yeatwork.ru/skills?specializations=${selectedSpecialization}&page=1`}
        title="Выберите навык"
      />

      <CategoryBlock
        selectedCategory={selectComplexity}
        selectCategory={toggleCategory1}
        title={"Уровень сложности"}
        arr={complexity}
      />

      <CategoryBlock
        selectedCategory={selectRating}
        selectCategory={toggleCategory}
        title={"Рейтинг"}
        arr={rating}
      />

      {/* <CategoryBlock title={"Статус"} arr={state} /> */}
    </div>
  );
};

export default Sidebar;
