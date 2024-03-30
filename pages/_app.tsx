import { Suspense, useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";

import "@/public/assets/scss/theme/main.scss";

import DarkModeToggle from "@/components/DarkModeToggle";
import Contact from "@/components/Contact";
import MenuMobile from "@/components/MenuMobile";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { register } from "swiper/element/bundle";
register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "swiper-slide": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.getElementById("__next")?.classList.add("uni-body");
  });
  // useEffect(() => {
  //   document.onreadystatechange = function () {
  //     const body = document.querySelector("body");
  //     const loader = document.getElementById("globalLoader");
  //     if (document.readyState !== "complete") {
  //       if (body) body.style.visibility = "hidden";
  //       if (loader) loader.style.visibility = "visible";
  //     } else {
  //       if (loader) loader.style.display = "none";
  //       if (body) body.style.visibility = "visible";
  //     }
  //   };
  // }, []);
  return (
    <>
      <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/uikit.min.js" />
      <Script src="/assets/js/uikit-components.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper-bundle.min.js" />
      <Script src="/assets/js/feather.min.js" />
      <Script src="/assets/js/typed.min.js" />
      <Script src="/assets/js/anime.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/app-head.js" strategy="beforeInteractive" />
      <Script src="/assets/js/app.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper-helper.js" strategy="lazyOnload" />
      <Script src="/assets/js/typed-helper.js" strategy="lazyOnload" />
      <Script src="/assets/js/anime-helper.js" strategy="beforeInteractive" />
      <Script src="/assets/js/anime-helper-defined-timelines.js" strategy="lazyOnload" />
      <Script src="/assets/js/schema-toggle.js" strategy="lazyOnload" />

      <DarkModeToggle />
      <MenuMobile />
      <Contact />
      <div className="wrap">
        <Menu />
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}
