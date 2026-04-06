import { useState } from "react";

import { QuestionDetail, QuestionDetailSidebar } from "@widgets/Question";
import { useNavigate } from "react-router";

import styles from "./styles.module.css";
import FlexContainer from "@shared/ui/FlexContainer/FlexContainer";

const QuestionDetailPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <FlexContainer type="row">
      <div>
        <button className={styles.back} onClick={() => navigate(-1)}>
          Назад
        </button>
        <QuestionDetail setOpen={setOpen} />
      </div>
      <QuestionDetailSidebar open={open} setOpen={setOpen} />
    </FlexContainer>
  );
};

export default QuestionDetailPage;
