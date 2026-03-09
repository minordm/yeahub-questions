import { type PropsWithChildren } from "react";

import styles from "./KeyWordButton.module.css";

const KeyWordButton = ({ children }: PropsWithChildren) => {
  return <button className={styles.words}>#{children}</button>;
};

export default KeyWordButton;
