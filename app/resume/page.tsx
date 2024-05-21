import ProjectCard from "../components/ProjectCard";
import Project1 from "@/public/images/project1.jpg";

export default function ResumePage() {
  return (
    <>
      <h1>All Projects</h1>
      <h2>Explore all my works</h2>
      <ProjectCard
        image={Project1}
        title="Item Flipper App Design"
        description="UI/UX Design"
      />
      <ProjectCard
        image={Project1}
        title="Item Flipper App Design"
        description="UI/UX Design"
      />
      <ProjectCard
        image={Project1}
        title="Item Flipper App Design"
        description="UI/UX Design"
      />
      <ProjectCard
        image={Project1}
        title="Item Flipper App Design"
        description="UI/UX Design"
      />
    </>
  );
}
