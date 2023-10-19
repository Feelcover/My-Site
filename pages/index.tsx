import Header from "@/components/Header/Header";
import Head from "next/head";
import styles from "../styles/Home.module.css";

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
      <Header />
      <main></main>
      <div className="backgroundAnimation">
        <div id="ballOne"></div>
        <div id="ballTwo"></div>
        <div id="ballThree"></div>
      </div>
    </>
  );
}
