import { Petrona } from "@next/font/google";
import { Copyright } from "./Copyright";
import styles from "../styles/Footer.module.css";

const bodyFont = Petrona({ weight: ["200", "500", "900"], subsets: ["latin"] });

export const Footer = () => {
  return (
    <footer className={`${bodyFont.className} ${styles.footer}`}>
      <Copyright />
    </footer>
  );
};
