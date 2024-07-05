import Blobs from "@/components/Blobs/Blobs";
import Header from "@/components/Header/Header";
import AboutMe from "@/sections/AboutMe/AboutMe";
import Contact from "@/sections/Contact/Contact";
import Interests from "@/sections/Interests/Interests";
import Quote from "@/sections/Quote/Quote";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Blobs />
      <Header />
      <div className={styles.cardsContainer}>
        <div className={styles.cardColumn}>
          <AboutMe />
          <Interests />
        </div>
        <div className={styles.cardColumn}>
          <Contact />
          <Quote />
        </div>
      </div>
    </main>
  );
}
