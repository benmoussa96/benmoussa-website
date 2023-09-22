import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html
      lang="en"
      className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20 uk-dark"
    >
      <Head>
        <meta charSet="UTF-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="title" content="theChainGenius" />
        <meta name="description" content="theChainGenius - Building The Decentralized Future" />
        <meta name="theme-color" content="#741ff5" />
        <link rel="icon" href="/assets/images/icons/dark-icon-grey.png" />
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
