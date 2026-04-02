import {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import styles from "./styles.module.css";

interface ISidebarBlockProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  title: string;
  renderButton?: () => ReactNode;
}

const SidebarBlock = function FormBlock({
  title,
  renderButton,
  children,
}: ISidebarBlockProps) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}:</h3>
      <ul className={styles.list}>{children}</ul>
      {renderButton && renderButton()}
    </div>
  );
};

export default SidebarBlock;
