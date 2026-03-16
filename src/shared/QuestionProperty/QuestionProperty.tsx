import styles from "./QuestionProperty.module.css";

interface QuestionPropertyProps {
  property: string;
  value: string;
}

const QuestionProperty = ({ property, value }: QuestionPropertyProps) => {
  return (
    <div className={styles.props}>
      {property}: <span>{value}</span>
    </div>
  );
};

export default QuestionProperty;
