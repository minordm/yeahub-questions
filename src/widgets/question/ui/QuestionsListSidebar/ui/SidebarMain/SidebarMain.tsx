import { Search } from "@features/question/ui/search";
import { FilterByComplexity } from "@features/question/ui/filter-by-complexity";
import { FilterByRate } from "@features/question/ui/filter-by-rate";
import { FilterBySkills } from "@features/question/ui/filter-by-skills";
import { FilterBySpecialization } from "@features/question/ui/filter-by-specialization";
import styles from "./styles.module.css";

const SidebarMain = ({ closeModal }: { closeModal?: () => void }) => {
  return (
    <aside className={styles.sidebar}>
      <Search />
      <FilterBySpecialization closeModal={closeModal} />
      <FilterBySkills closeModal={closeModal} />
      <FilterByComplexity closeModal={closeModal} />
      <FilterByRate closeModal={closeModal} />
    </aside>
  );
};

export default SidebarMain;
