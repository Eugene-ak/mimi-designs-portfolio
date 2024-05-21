import ProjectCard from "../../ProjectCard";
import Project1 from "@/public/images/project1.jpg";
import Project2 from "@/public/images/project2.jpg";
import Project3 from "@/public/images/project3.jpg";
import Project4 from "@/public/images/project4.jpg";

export default function HomeProjects() {
  return (
    <section>
      <h1>Recent Projects</h1>
      <h2>Explore some of my recent projects</h2>
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
      <button>View All Works</button>
    </section>
  );
}
