import { useNavigate } from "react-router";
import styles from "./styles.module.css";

const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      <img src="yeahub-logo.svg" alt="" />
      <p>Yeahub</p>
    </div>
  );
};

export default HeaderLogo;
