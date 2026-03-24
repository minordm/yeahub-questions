import styles from "./styles.module.css";
import DOMPurify from "dompurify";

type Props = {
  html: string;
};

export const HtmlRenderer = ({ html }: Props) => {
  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <div
      className={styles.render}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};
