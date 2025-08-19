import { ReactNode } from "react";
import styles from "./HeroHeadline.module.css";

interface HeroHeadlineProps {
  children: ReactNode;
}

export default function HeroHeadline({ children }: HeroHeadlineProps) {
  return (
    <h1 className={styles.headline}>
      <span className={styles.textReveal}>{children}</span>
    </h1>
  );
}
