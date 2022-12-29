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
          <h2>
            <img src="/noun-about-us-4149186.svg" height="64" alt=""/>
            About us
          </h2>
          <img
            src="/AdobeStock_211095871.jpeg"
            alt=""
            className={styles.heroImage}
          />
          <p>
            Turingg, named after <a href="https://en.wikipedia.org/wiki/Alan_Turing">Alan Turing</a>,
            father of theoretical computer science and artificial intelligence.
            &mdash;is{" "}
            <a href="https://behrang.org" className={styles.my}>
              my
            </a>{" "}
            small software development company based in
            Melbourne,&nbsp;Australia. I help my clients with their cloud
            infrastructure, backend &amp; frontend development, requirements
            gathering, &amp; solution design needs.
          </p>
          <h2>Services</h2>
          <p>
            If you are looking to build a new website for your business, or to
            renovate your existing website, we can help you with that by
            embracing agile &amp; high-end technologies such as{" "}
            <a href="https://nextjs.org">Next.js</a>,{" "}
            <a href="https://vercel.com">Vercel</a>, &amp;{" "}
            <a href="https://www.serverless.com/cloud">serverless.com</a> or by
            building and deploying to your custom private cloud infrastructure.
          </p>
          <h2>Contact us</h2>
          <p>
            For more information, please contact us at{" "}
            <a href="mailto:contact@turingg.com.au">contact@turingg.com.au</a>.
          </p>
        </div>
      </main>
    </>
  );
}
