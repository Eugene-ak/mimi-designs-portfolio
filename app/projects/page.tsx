"use client";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Project1 from "@/public/images/project1.jpg";
import Project2 from "@/public/images/project2.jpg";
import Project3 from "@/public/images/project3.jpg";
import Project4 from "@/public/images/project4.jpg";
import Project5 from "@/public/images/project5.jpg";
import Project6 from "@/public/images/project6.jpg";
import styled from "styled-components";

const ProjectPageContainer = styled.section`
  width: 100%;
  margin: 7.1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > div:first-of-type {
    text-align: center;
  }
`;

const ProjectContainer = styled.div`
  width: 85%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default function ProjectPage() {
  return (
    <>
      <Header />
      <ProjectPageContainer>
        <div>
          <h1 className="large-heading">All Projects</h1>
          <h2>
            Explore all <span className="colored-text">my works</span>
          </h2>
        </div>
        <ProjectContainer>
          <ProjectCard
            image={Project1}
            title="Item Flipper App Design"
            description="UI/UX Design"
            href="https://www.behance.net/gallery/191152017/Item-Flipper-App-UIUX"
          />
          <ProjectCard
            image={Project2}
            title="Web App For A Beverage Company"
            description="UI/UX Design"
            href="https://www.behance.net/gallery/192421043/Shallom-Edibles-Landing-page"
          />
          <ProjectCard
            image={Project3}
            title="AskPBS Website Design"
            description="UI/UX Design"
            href="https://www.behance.net/gallery/192710957/AskPBS-Website-Landing-Page"
          />
          <ProjectCard
            image={Project4}
            title="Dumpinn Landing Page Design"
            description="UI/UX Design"
            href="https://www.behance.net/gallery/192302775/Dumpinn-Landing-Page-Design"
          />
          <ProjectCard
            image={Project5}
            title="Matis Brand Identity"
            description="UI/UX Design"
            href="https://www.behance.net/gallery/192424901/Matis-Agency-Brand"
          />
          <ProjectCard
            image={Project6}
            title="Graphics for Advertisement"
            description="UI/UX Design"
            href=""
          />
        </ProjectContainer>
        <ContactSection />
      </ProjectPageContainer>
      <Footer />
    </>
  );
}
