import Head from "next/head";
import { IBM_Plex_Sans } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Logo } from "../components/Logo";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["700", "300"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Turingg</title>
        <meta name="description" content="Turingg Pty Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <Logo />
          <div className={`${plex.className} ${styles.companyName}`}>
            Turingg
          </div>
        </header>

        <div className={`${plex.className} ${styles.aboutUs}`}>
          <p>
            We are a small team of software developers based in Melbourne,
            Australia. We help our clients with their cloud infrastructure,
            backend, and frontend development, requirements gathering, and
            solution design needs.
          </p>
          <p>
            If you are looking to build a new website for your business, or if
            you are looking to renovate your existing website(s), we can also help
            you with that by embracing modern and agile technologies such as Next.js, Vercel, and serverless.com.
          </p>

          <h2>Our past clients:</h2>
          <ul>
            <li>Origin</li>
            <li>Sportsbet</li>
            <li>ANZ</li>
            <li>NAB</li>
          </ul>
        </div>
      </main>
    </>
  );
}
