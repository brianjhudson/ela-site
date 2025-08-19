import { ReactNode } from "react";
import styles from "./HeroImage.module.css";

interface HeroImageProps {
  children: ReactNode;
}

export default function HeroImage({ children }: HeroImageProps) {
  return <div className={styles.graphicSection}>{children}</div>;
}
