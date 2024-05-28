import ProjectCard from "../../../ProjectCard/ProjectCard";
import Project1 from "@/public/images/project1.jpg";
import Project2 from "@/public/images/project2.jpg";
import Project3 from "@/public/images/project3.jpg";
import Project4 from "@/public/images/project4.jpg";
import StyledProjectSection from "./HomeProject.style";
import Button from "@/components/Button/Button";

export default function HomeProjects() {
  return (
    <StyledProjectSection>
      <h1>Recent Projects</h1>
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
