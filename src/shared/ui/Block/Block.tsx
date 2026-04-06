import {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import styles from "./styles.module.css";

interface IBlockProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  title: string;
  renderButton?: () => ReactNode;
}

const Block = ({ title, renderButton, children }: IBlockProps) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>{children}</ul>
      {renderButton && renderButton()}
    </div>
  );
};

export default Block;
