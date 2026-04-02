import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <HeaderLogo />
          <HeaderNav />
        </div>
        <HeaderAuth />
      </div>
    </header>
  );
};

export default Header;
