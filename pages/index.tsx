import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import Layout from "../Layout/Layout";
import Head from "next/head";
import Balls from "../components/Balls/Balls";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrey Chebanov</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/images/logo.svg"
        />
      </Head>
      <Balls/>
      <Layout>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
      </Layout>
    </>
  );
}
