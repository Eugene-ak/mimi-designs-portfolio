import ProjectCard from "../../ProjectCard";
import Project1 from "@/public/images/project1.jpg";
import Project2 from "@/public/images/project2.jpg";
import Project3 from "@/public/images/project3.jpg";
import Project4 from "@/public/images/project4.jpg";
import Button from "@/components/Button";
import styled from "styled-components";

const StyledProjectSection = styled.section`
  width: 100%;
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1, h2 {
    text-align: center;
  }

  & > div {
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
  }
`;

export default function HomeProjects() {
  return (
    <StyledProjectSection>
      <h1 className="large-heading">Recent Projects</h1>
      <h2>
        Explore some of my <span className="colored-text">recent projects</span>
      </h2>
      <div>
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
      </div>
      <Button text="View All Works" href="resume" />
    </StyledProjectSection>
  );
}
