import { useLayoutEffect, useState, type RefObject } from "react";

interface useCalcHeightProps {
  ref: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  initialHeight: number;
}

const useCalcHeight = ({ ref, isOpen, initialHeight }: useCalcHeightProps) => {
  const [height, setHeight] = useState(initialHeight);

  useLayoutEffect(() => {
    if (isOpen && ref.current) {
      setHeight(ref.current.scrollHeight - 24);
    } else {
      setHeight(initialHeight);
    }
  }, [isOpen, ref, initialHeight]);

  return height;
};

export default useCalcHeight;
