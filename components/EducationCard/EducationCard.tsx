import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import StyledEducationCard from "./EducationCard.style";

export default function EducationCard({
  image,
  title,
  institution,
  children,
}: {
  image: StaticImageData;
  title: string;
  institution: string;
  children: ReactNode;
}) {
  return (
    <StyledEducationCard>
      <Image src={image} alt="badge" />
      <h3>{title}</h3>
      <h4>{institution}</h4>
      {children}
    </StyledEducationCard>
  );
}
