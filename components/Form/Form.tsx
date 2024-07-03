import Button from "../Button/Button";
import styles from "./form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div>
        <input type="text" placeholder="Your full name" />
        <input type="email" placeholder="Your email" />
      </div>
      <textarea placeholder="I wanna talk about..." />
      <Button>Let's talk!</Button>
    </form>
  );
}
