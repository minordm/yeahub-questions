import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

import styles from "./Sidebar.module.css";

type TSidebarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

const Sidebar = ({ children }: PropsWithChildren) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};

export default Sidebar;

Sidebar.Block = function FormBlock({ children }: PropsWithChildren) {
  return <div className={styles.block}>{children}</div>;
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
