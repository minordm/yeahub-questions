import { Outlet } from "react-router";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

import { useState } from "react";
import { ModalContext } from "@shared/lib/providers/ModalContext";
import type { TModalState } from "@shared/model/types";
import styles from "./styles.module.css";

function App() {
  const [open, setOpen] = useState<TModalState>("");

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </ModalContext.Provider>
  );
}

export default App;
