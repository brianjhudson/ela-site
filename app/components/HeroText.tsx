import { ReactNode } from "react";
import styles from "./HeroText.module.css";

interface HeroTextProps {
  children: ReactNode;
}

export default function HeroText({ children }: HeroTextProps) {
  return <div className={styles.textSection}>{children}</div>;
}
