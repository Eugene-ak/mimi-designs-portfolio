"use client";

import React from 'react'
import ProfileDescription from '@/components/pageSections/aboutPage/ProfileDescription'
import ToolStackSection from '@/components/pageSections/aboutPage/ToolStackSection'
import SkillsSection from '@/components/pageSections/aboutPage/SkillsSection'
import CertificationSection from '@/components/pageSections/aboutPage/CertificationSection'
import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <ProfileDescription />
      <ToolStackSection />
      <SkillsSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </>
  )
}
