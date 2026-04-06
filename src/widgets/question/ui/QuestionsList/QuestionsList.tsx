import { QuestionPagination } from "@features/question/ui/paginate";
import { QuestionListFilter } from "@features/question/ui/filter-list";
import Card from "@shared/ui/Card/Card";
import styles from "./styles.module.css";

const QuestionsList = ({ openModal }: { openModal: () => void }) => {
  return (
    <Card>
      <div className={styles["questions-container"]}>
        <QuestionListFilter openModal={openModal} />
        <QuestionPagination />
      </div>
    </Card>
  );
};

export default QuestionsList;
