import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

const Main = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("11");
  const [selectSkill, setSelectSkill] = useState<string>("");
  const [selectComplexity, setSelectComplexity] = useState<string>("");
  const [selectRating, setSelectRating] = useState<string>("");

  // console.log(selectedSpecialization, selectComplexity);
  // const handleSetCategory = (category) => {

  // }

  return (
    <>
      <Content
        search={search}
        specialization={selectedSpecialization}
        selectSkill={selectSkill}
        selectComplexity={selectComplexity}
        selectRating={selectRating}
      />
      <Sidebar
        search={search}
        setSearch={setSearch}
        selectedSpecialization={selectedSpecialization}
        setSelectedSpecialization={setSelectedSpecialization}
        selectSkill={selectSkill}
        setSelectSkill={setSelectSkill}
        selectComplexity={selectComplexity}
        setSelectComplexity={setSelectComplexity}
        selectRating={selectRating}
        setSelectRating={setSelectRating}
      />
    </>
  );
};

export default Main;
