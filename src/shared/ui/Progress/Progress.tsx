import type { ProgressHTMLAttributes } from "react";
import "./styles.module.css";

const Progress = ({
  ...props
}: ProgressHTMLAttributes<HTMLProgressElement>) => {
  return <progress {...props}></progress>;
};

export default Progress;
