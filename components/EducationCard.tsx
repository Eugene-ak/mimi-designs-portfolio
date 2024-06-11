import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

const StyledEducationCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr;
  gap: .5rem;

  & > img {
    width: clamp(3rem, 10vw, 10rem);
    height: auto;
    grid-area: 1 / 1 / 3 / 2;
  }

  & > h3 {
    font-weight: 400;
  }

  & > h4 {
    color: #a1a1a1;
    font-weight: 400;
  }

  & > p {
    grid-area: 3 / 1 / 4 / 3;
    color: #a1a1a1;
    margin: 1.5rem 0;

    & > span {
      color: var(--text-color);
      font-weight: 600;
    }
  }

  & > button {
    grid-area: 3 / 2 / 4 / 3;
    width: max-content;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid var(--text-color);
    border-radius: 20px;
    color: var(--text-color);
    font-size: .8rem;
    display: flex;
    gap: .5rem;
  }
`;

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
