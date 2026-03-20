import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
