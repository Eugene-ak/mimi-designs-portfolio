"use client";

import React from 'react'
import ProfileDescription from '@/components/pageSections/aboutPage/DescriptionSection/ProfileDescription'
import ToolStackSection from '@/components/pageSections/aboutPage/ToolsSection/ToolStackSection'
import SkillsSection from '@/components/pageSections/aboutPage/SkillSection/SkillsSection'
import CertificationSection from '@/components/pageSections/aboutPage/CertificationSection/CertificationSection'
import ContactSection from '@/components/pageSections/ContactSection/ContactSection'

export default function AboutPage() {
  return (
    <>
      <ProfileDescription />
      <ToolStackSection />
      <SkillsSection />
      <CertificationSection />
      <ContactSection />
    </>
  )
}
