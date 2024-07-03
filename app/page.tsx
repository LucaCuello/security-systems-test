import Header from "@/components/Header/Header";
import AboutMe from "@/sections/AboutMe/AboutMe";
import Contact from "@/sections/Contact/Contact";
import Interests from "@/sections/Interests/Interests";
import Quote from "@/sections/Quote/Quote";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.cardsContainer}>
        <div>
          <AboutMe />
          <Interests />
        </div>
        <div>
          <Contact />
          <Quote />
        </div>
      </div>
    </main>
  );
}
