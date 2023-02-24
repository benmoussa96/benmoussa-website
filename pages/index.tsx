import React from "react";

import Hero from "@/components/landing-page/Hero";
import Clients from "@/components/landing-page/Clients";
import Divider from "@/components/Divider";
import Numbers from "@/components/landing-page/Numbers";
import AboutMe from "@/components/landing-page/AboutMe";
import CallToAction from "@/components/landing-page/CallToAction";
import Expertise from "@/components/landing-page/Expertise";
import Work from "@/components/landing-page/Work";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Divider />

      {/* <Divider />
      <Numbers /> */}

      <AboutMe />
      <Divider />

      <Expertise />
      <Divider />

      <Work />
      <Divider />

      <Testimonials />
      <Divider />

      <CallToAction />
      <Divider />
    </>
  );
}
