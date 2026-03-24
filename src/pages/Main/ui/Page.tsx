import { useState } from "react";
import { Sidebar, Content } from "@widgets/main";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Content openModal={() => setOpen(true)} />
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Main;
