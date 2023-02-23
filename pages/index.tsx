import React from "react";

import Hero from "@/components/landing-page/Hero";
import Clients from "@/components/landing-page/Clients";
import Divider from "@/components/Divider";
import Numbers from "@/components/landing-page/Numbers";
import AboutMe from "@/components/landing-page/AboutMe";
import SchedualCall from "@/components/landing-page/SchedualCall";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      {/* <Divider />
      <Numbers /> */}
      <Divider />
      <AboutMe />
      <Divider />
      <SchedualCall />
    </>
  );
}
