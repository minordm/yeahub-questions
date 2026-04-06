import { useNavigate } from "react-router";
import yeahubLogo from "../../assets/yeahub-logo.svg";
import styles from "./styles.module.css";

const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      <img src={yeahubLogo} alt="Логотип Yeahub" />
      <p>Yeahub</p>
    </div>
  );
};

export default HeaderLogo;
