import Head from "next/head";

import "../styles/global.css";
import "react-chat-elements/dist/main.css"



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FinanceFriend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
