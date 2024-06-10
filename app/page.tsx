"use client";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/pageSections/homePage/Hero";
import HomeAbout from "@/components/pageSections/homePage/HomeAbout";
import HomeProjects from "@/components/pageSections/homePage/HomeProjects";
import HomeTestimonials from "@/components/pageSections/homePage/HomeTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeAbout />
      <HomeProjects />
      <HomeTestimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
