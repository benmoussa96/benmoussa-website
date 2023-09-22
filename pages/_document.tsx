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
        <link
          rel="preload"
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
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/css/uikit.min.css"
          as="style"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/uikit.min.js" />
        <Script src="/assets/js/uikit-components.js" strategy="beforeInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" />
        <Script src="/assets/js/feather.min.js" />
        <Script src="/assets/js/typed.min.js" />
        <Script src="/assets/js/anime.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/app-head.js" strategy="beforeInteractive" />
        <Script src="/assets/js/app.js" strategy="beforeInteractive" />
        <Script src="/assets/js/swiper-helper.js" strategy="beforeInteractive" />
        <Script src="/assets/js/typed-helper.js" strategy="beforeInteractive" />
        <Script src="/assets/js/anime-helper.js" strategy="beforeInteractive" />
        <Script src="/assets/js/anime-helper-defined-timelines.js" strategy="beforeInteractive" />
        <Script src="/assets/js/schema-toggle.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
