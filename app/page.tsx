"use client";

import ContactSection from "./components/pageSections/ContactSection";
import Hero from "./components/pageSections/homePage/Hero/Hero";
import HomeAbout from "./components/pageSections/homePage/HomeAboutSection/HomeAbout";
import HomeProjects from "./components/pageSections/homePage/HomeProjectSection/HomeProjects";
import HomeTestimonials from "./components/pageSections/homePage/HomeTestimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeProjects />
      <HomeTestimonials />
      <ContactSection />
    </>
  );
}
