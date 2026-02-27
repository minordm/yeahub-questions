import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Content />
      <Sidebar />
    </div>
  );
};

export default Main;
