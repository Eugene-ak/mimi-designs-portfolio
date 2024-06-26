import Image from "next/image";
import HeroImage from "@/public/images/hero-background.png";
import NameAndTitle from "@/public/images/nameAndTitle.png";
import MobileNameAndTitle from "@/public/images/mobileName&Title.png";
import styled from "styled-components";

const StyledHero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 45%;
    height: auto;

    &:first-of-type {
      width: 50%;
      margin-top: 3rem;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <Image src={HeroImage} alt="Profile" quality={100} placeholder="blur" />
      <Image src={NameAndTitle} alt="Profile" quality={100} placeholder="blur" />
    </StyledHero>
  )
}
