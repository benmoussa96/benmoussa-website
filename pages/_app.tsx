import { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";

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
