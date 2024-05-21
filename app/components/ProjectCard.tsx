import Image, { StaticImageData } from "next/image";

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
    <div>
      <Image src={image} alt="Project Thumbnail" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
