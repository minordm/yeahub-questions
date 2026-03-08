import { useParams } from "react-router";

import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "./Content/Content.jsx";

const Question = () => {
  const { id } = useParams();

  return (
    <>
      <Content />
      <Sidebar />
    </>
  );
};

export default Question;
