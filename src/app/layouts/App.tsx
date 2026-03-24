import { Outlet } from "react-router";
import Header from "@widgets/header";
import Footer from "@widgets/footer";

import styles from "./styles.module.css";
import { useState } from "react";
import { ModalContext } from "@app/providers/ModalContext";
import type { TModalState } from "@shared/model/types";

function App() {
  const [open, setOpen] = useState<TModalState>("");

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </ModalContext.Provider>
  );
}

export default App;
