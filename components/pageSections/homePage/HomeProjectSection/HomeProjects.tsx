import ProjectCard from "../../../ProjectCard/ProjectCard";
import Project1 from "@/public/images/project1.jpg";
import Project2 from "@/public/images/project2.jpg";
import Project3 from "@/public/images/project3.jpg";
import Project4 from "@/public/images/project4.jpg";
import Button from "@/components/Button/Button";
import styled from "styled-components";

const StyledProjectSection = styled.section`
  width: 100%;
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    /* font-size: clamp; */
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
        />
        <ProjectCard
          image={Project2}
          title="Web App For A Beverage Company"
          description="UI/UX Design"
        />
        <ProjectCard
          image={Project3}
          title="AskPBS Website Design"
          description="UI/UX Design"
        />
        <ProjectCard
          image={Project4}
          title="Dumpinn LAnding Page Design"
          description="UI/UX Design"
        />
      </div>
      <Button text="View All Works" />
    </StyledProjectSection>
  );
}
