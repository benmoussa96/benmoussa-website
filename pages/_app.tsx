import { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";

import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Scrollbar],

  // Optional parameters
  direction: "horizontal",
  spaceBetween: 30,
  effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-pagination-progressbar",
  },
});

import "@/public/assets/scss/theme/main.scss";

import DarkModeToggle from "@/components/DarkModeToggle";
import Contact from "@/components/Contact";
import MenuMobile from "@/components/MenuMobile";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.getElementById("__next")?.classList.add("uni-body");
  });
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

      {/* <Script defer src="/assets/js/jquery.min.js" />
      <Script defer src="/assets/js/swiper-bundle.min.js" />
      <Script defer src="/assets/js/feather.min.js" />
      <Script defer src="/assets/js/typed.min.js" />
      <Script defer src="/assets/js/anime.min.js" />
      <Script defer src="/assets/js/app.js" />
      <Script defer src="/assets/js/swiper-helper.js" />
      <Script defer src="/assets/js/typed-helper.js" />
      <Script defer src="/assets/js/anime-helper.js" />
      <Script defer src="/assets/js/anime-helper-defined-timelines.js" /> */}
    </>
  );
}
