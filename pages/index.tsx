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
          <h1 className={`${plex.className} ${styles.companyName}`}>Turingg</h1>
        </header>

        <div className={`${plex.className} ${styles.aboutUs}`}>
          <h2>About us</h2>
          <img src="/AdobeStock_211095871.jpeg" alt="" className={styles.heroImage}/>
          <p>
            We are a small team of software developers based in
            Melbourne,&nbsp;Australia. We help our clients with their cloud
            infrastructure, backend &amp; frontend development, requirements
            gathering, &amp; solution design needs.
          </p>
          <h2>Services</h2>
          <p>
            If you are looking to build a new website for your business, or if
            you are looking to renovate your existing website(s), we can help
            you with that by embracing modern &amp; sophisticated technologies such as
            Next.js, Vercel, &amp; serverless.com.
          </p>
        </div>
      </main>
    </>
  );
}
