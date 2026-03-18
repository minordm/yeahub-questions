import styles from "./QuestionProperty.module.css";

interface QuestionPropertyProps {
  property: string;
  value: string | number;
}

const QuestionProperty = ({ property, value }: QuestionPropertyProps) => {
  return (
    <div className={styles.props}>
      {property}: <span>{value}</span>
    </div>
  );
};

export default QuestionProperty;
