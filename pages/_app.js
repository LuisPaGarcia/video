import "../css/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Video Futura </title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
