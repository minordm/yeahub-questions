import { createContext, /*useContext,*/ type PropsWithChildren } from "react";

import styles from "./Sidebar.module.css";

type SidebarContextProps = {
  text: string;
};

type SidebarProps = PropsWithChildren & {
  text: string;
};

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

// function useSidebarContext() {
//   const context = useContext(SidebarContext);

//   if (!context) {
//     throw new Error("not context");
//   }
//   return context;
// }

const Sidebar = ({ text, children }: SidebarProps) => {
  return (
    <SidebarContext.Provider value={{ text }}>
      <div className={styles.sidebar}>{children}</div>
    </SidebarContext.Provider>
  );
};

export default Sidebar;

Sidebar.Block = function FormBlock({ children }: PropsWithChildren) {
  //   const { text } = useSidebarContext();
  return <div className={styles.block}>{children}</div>;
};

Sidebar.Title = function SidebarTitle({ children }: PropsWithChildren) {
  //   const { text } = useSidebarContext();
  return <h3 className={styles.title}>{children}:</h3>;
};

Sidebar.Skill = function SidebarSkill({ children }: PropsWithChildren) {
  return <ul className={styles.skills}>{children}</ul>;
};

// Sidebar.Button = function SidebarButton() { // show more

// }
