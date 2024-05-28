import Image, { StaticImageData } from "next/image";
import StyledProjectCard from "./ProjectCard.style";

export default function ProjectCard({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <StyledProjectCard>
      <div>
        <Image src={image} alt="Project Thumbnail" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </StyledProjectCard>
  );
}
