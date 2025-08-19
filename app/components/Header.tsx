import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoText}>English</div>
        <div className={styles.logoText}>Trainer</div>
      </div>
      <div className={styles.menuIcon}>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
      </div>
    </header>
  );
}
