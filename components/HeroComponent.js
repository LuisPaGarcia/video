import React from "react";
import { Hero } from "@components/Landing/Hero";
import { Details } from "@components/Landing/Details";
import { Subscribe } from "@components/Landing/Subscribe";
import { Footer } from "@components/Landing/Footer";

export function HeroComponent() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Details */}
      <Details />

      {/* Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </>
  );
}
