import { type PropsWithChildren } from "react";

import styles from "./Sidebar.module.css";
import { SidebarContext, type SidebarContextProps } from "./context";

type SidebarBlockProps = PropsWithChildren & SidebarContextProps;

const Sidebar = ({ children }: PropsWithChildren) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export default Sidebar;

Sidebar.Block = function FormBlock({
  text,
  skill,
  children,
}: SidebarBlockProps) {
  return (
    <SidebarContext.Provider value={{ text, skill }}>
      <div className={styles.block}>{children}</div>
    </SidebarContext.Provider>
  );
};

Sidebar.Title = function SidebarTitle({ children }: PropsWithChildren) {
  return <h3 className={styles.title}>{children}:</h3>;
};

Sidebar.Skill = function SidebarSkill({ children }: PropsWithChildren) {
  return <ul className={styles.skills}>{children}</ul>;
};

// сделать кнопку показать/скрыть
// Sidebar.Button = function SidebarButton() { // show more

// }
