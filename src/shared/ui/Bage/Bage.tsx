import styles from "./styles.module.css";

interface Bage {
  property: string;
  value?: string | number;
}

const Bage = ({ property = "", value = 0 }: Bage) => {
  return (
    <div className={styles.props}>
      {property}:&nbsp;<span>{value}</span>
    </div>
  );
};

export default Bage;
