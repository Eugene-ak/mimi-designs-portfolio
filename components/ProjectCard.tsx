import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  width: 100%;
  background: #212121;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: .3s;

  &:hover {
    transform: scale(1.05);
    transition: .3s;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  & > div:first-of-type > img {
    width: 100%;
    height: auto;
  }

  & > div:last-of-type {
    padding: 1rem;

    & > h3, p {
      padding: 0.5rem 0;
    }
  }
`;

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
