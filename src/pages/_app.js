import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>I am Scientist</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
