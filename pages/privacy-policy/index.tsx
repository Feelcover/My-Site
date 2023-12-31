import Balls from "../../components/Balls/Balls";
import PolicyContent from "../../components/PolicyContent/PolicyContent";
import Layout from "../../Layout/Layout";
import Head from "next/head";

export default function PrivacyPolicy() {
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
      <Layout>
        <main>
          <PolicyContent />
        </main>
      </Layout>
      <Balls />
    </>
  );
}
