import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

import styles from "./Sidebar.module.css";
import { SidebarContext, type TSidebarContextProps } from "./context";

type TSidebarBlockProps = PropsWithChildren & TSidebarContextProps;

type TSidebarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

const Sidebar = ({ children }: PropsWithChildren) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export default Sidebar;

Sidebar.Block = function FormBlock({
  text,
  skill,
  children,
}: TSidebarBlockProps) {
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

Sidebar.Button = function SidebarButton({
  children,
  ...props
}: TSidebarButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
