import React from "react";

import Hero from "@/components/landing-page/Hero";
import Clients from "@/components/landing-page/Clients";
import Divider from "@/components/Divider";
import Numbers from "@/components/landing-page/Numbers";
import AboutMe from "@/components/landing-page/AboutMe";
import CallToAction from "@/components/landing-page/CallToAction";
import Expertise from "@/components/landing-page/Expertise";
import Work from "@/components/landing-page/Work";
import Pricing from "@/components/landing-page/Pricing";
import MyValues from "@/components/landing-page/MyValues";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Divider />

      {/* <Divider />
      <Numbers /> */}

      <AboutMe />
      <MyValues />
      <Divider />

      <Expertise />
      <Divider />

      <Work />
      <Divider />

      {/* <Pricing />
      <Divider /> */}

      <CallToAction />
      <Divider />
    </>
  );
}
