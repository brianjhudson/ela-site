import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroText from "./components/HeroText";
import HeroImage from "./components/HeroImage";
import HeroHeadline from "./components/HeroHeadline";
import HeroBody from "./components/HeroBody";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero>
        <HeroText>
          <HeroHeadline>Master English Language Arts</HeroHeadline>
          <HeroBody>
            We train students to read, write, think, and discuss critically.
            With years of experience in education at all levels, we bring deep
            expertise, proven methodologies, and personalized instruction to
            every learning journey.
          </HeroBody>
        </HeroText>
        <HeroImage>
          <div className={styles.abstractGraphic}>
            <div className={styles.geometricShape1}></div>
            <div className={styles.geometricShape2}></div>
            <div className={styles.geometricShape3}></div>
            <div className={styles.geometricShape4}></div>
            <div className={styles.geometricShape5}></div>
            <div className={styles.geometricShape6}></div>
          </div>
        </HeroImage>
      </Hero>
    </div>
  );
}
