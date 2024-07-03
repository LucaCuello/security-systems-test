import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.userContainer}>
        <Image
          src="/profile.avif"
          width={65}
          height={65}
          alt="Profile picture of the current user"
          draggable={false}
        />
        <div className={styles.nameContainer}>
          <h4>John Williams</h4>
          <p> Composer</p>
        </div>
      </div>
    </header>
  );
}
