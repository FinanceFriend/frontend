import Head from "next/head";

import "../styles/global.css";
import "react-chat-elements/dist/main.css";

import { LandDataProvider } from "@/context/LandDataProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FinanceFriend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandDataProvider>
        <Component {...pageProps} />
      </LandDataProvider>
    </>
  );
}

export default MyApp;
