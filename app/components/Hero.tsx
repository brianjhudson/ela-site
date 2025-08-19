import { ReactNode } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
