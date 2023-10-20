import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Head from "next/head";

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
      <main>
        <Hero/>
      </main>
      <div className="backgroundAnimation">
        <div id="ballOne"></div>
        <div id="ballTwo"></div>
        <div id="ballThree"></div>
      </div>
    </>
  );
}
