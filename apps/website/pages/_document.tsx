import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Suspense, useEffect } from "react";
import loader from "../components/loader";

export default function Document() {
  return (
    <Html
      lang="en"
      className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20 uk-dark"
    >
      <Head>
        <meta charSet="UTF-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="title" content="The Chain Genius" />
        <meta name="description" content="The Chain Genius - Builder Of The Decentralized Future" />
        <meta name="theme-color" content="#741ff5" />
        <link rel="icon" href="/assets/images/icons/dark-icon-grey.png" />
        <link rel="apple-touch-icon" href="/assets/images/icons/dark-icon-outline.png"></link>
        {/* <title>The Chain Genius</title> */}
        <meta property="og:url" content="theChainGenius.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Chain Genius" />
        <meta property="og:description" content="Builder Of The Decentralized Future" />
        <meta property="og:image" content="/assets/images/artwork/preview.png" />
        <meta name="twitter:card" content="summary" />
        {/* <style>{loader}</style> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8.3.2/swiper-bundle.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="/assets/fonts/brand-icons/brand-icons.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/unicons/Unicons.woff?lkolxg"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/css/uikit.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=Preahvihear&family=Space+Grotesk:wght@400;700&family=Inter:wght@200;400;600&display=swap"
        />
      </Head>
      <body>
        {/* <div id={"globalLoader"}>
          <div className="loader">
            <div />
            <div />
          </div>
        </div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
