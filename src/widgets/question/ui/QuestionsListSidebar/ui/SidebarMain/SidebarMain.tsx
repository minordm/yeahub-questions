import Search from "@features/questions-search/Search";
import FilterByComplexity from "@features/question-filter-by-complexity/FilterByComplexity";
import FilterByRate from "@features/question-filter-by-rate/FilterByRate";
import FilterBySkills from "@features/question-filter-by-skills/FilterBySkills";
import FilterBySpecialization from "@features/question-filter-by-specialization/FilterBySpecialization";
import styles from "./styles.module.css";

const SidebarMain = ({ closeModal }: { closeModal?: () => void }) => {
  return (
    <aside className={styles.sidebar}>
      <Search />
      <FilterBySpecialization closeModal={closeModal ?? (() => {})} />
      <FilterBySkills closeModal={closeModal ?? (() => {})} />
      <FilterByComplexity closeModal={closeModal ?? (() => {})} />
      <FilterByRate closeModal={closeModal ?? (() => {})} />
    </aside>
  );
};

export default SidebarMain;
