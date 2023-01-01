import Head from "next/head";
import { Copyright } from "../components/Copyright";
import { Logo } from "../components/Logo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Turingg</title>
        <meta name="description" content="Turingg Pty Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.root}>
        <header>
          <Logo />
        </header>
        <footer className={styles.footer}>
          <Copyright />
        </footer>
      </main>
    </>
  );
}