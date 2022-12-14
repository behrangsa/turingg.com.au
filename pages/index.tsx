import Head from "next/head";
import { Petrona } from "@next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";

const bodyFont = Petrona({ weight: ["200", "500", "900"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Turingg</title>
        <meta name="description" content="Turingg Pty Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={`${styles.root} ${bodyFont.className}`}>
        <Header />

        <section className={styles.body}>
          <h2>About Tu</h2>
          <p>
            Welcome to <span>Turingg</span>,{" "}
            <a href="https://behrang.org">my</a> small software development
            company based in Melbourne,&nbsp;Australia.
          </p>
          <p>
            I help my clients with their cloud infrastructure, backend
            development, and frontend development needs. I can also help you
            with requirements gathering, architecture, and system solution
            design.
          </p>
          <h2>Services</h2>
          <p>
            If you are looking to build a new website for your business, or to
            renovate your existing website, I can help you by embracing agile
            and sophisticated technologies such as{" "}
            <a href="https://nextjs.org">Next.js</a>,{" "}
            <a href="https://vercel.com">Vercel</a>, and{" "}
            <a href="https://www.serverless.com/cloud">serverless.com</a> or by
            building and deploying to your custom private cloud infrastructure.
          </p>
          <h2>Contact us</h2>
          <p>
            For more information, contact us at{" "}
            <a href="mailto:contact@turingg.com.au">contact@turingg.com.au</a>.
          </p>
        </section>

        <Footer />
        <a rel="me" href="https://social.vivaldi.net/@behrangsa" className={styles.mastodon}>Mastodon</a>
      </main>
    </>
  );
}
