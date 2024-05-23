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
      <Image src={image} alt="Project Thumbnail" />
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledProjectCard>
  );
}
