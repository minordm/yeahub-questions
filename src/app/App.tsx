import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
