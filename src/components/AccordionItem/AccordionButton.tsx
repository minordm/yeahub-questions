import { useLayoutEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionButton = () => {
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (isOpen && answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <AccordionItem
      isOpen={isOpen}
      ref={answerRef}
      height={height}
      open={handleOpen}
    />
  );
};

export default AccordionButton;
