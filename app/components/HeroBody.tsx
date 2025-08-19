import { ReactNode } from "react";
import styles from "./HeroBody.module.css";

interface HeroBodyProps {
  children: ReactNode;
}

export default function HeroBody({ children }: HeroBodyProps) {
  return <p className={styles.bodyText}>{children}</p>;
}
