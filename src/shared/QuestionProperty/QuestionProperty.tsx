import styles from "./QuestionProperty.module.css";

interface QuestionPropertyProps {
  property: string;
  value?: string | number;
}

const QuestionProperty = ({
  property = "",
  value = 0,
}: QuestionPropertyProps) => {
  return (
    <div className={styles.props}>
      {property}:&nbsp;<span>{value}</span>
    </div>
  );
};

export default QuestionProperty;
