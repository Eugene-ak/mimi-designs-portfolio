import Image from "next/image";
import HeroImage from "@/public/images/hero-background.png";
import NameAndTitle from "@/public/images/nameAndTitle.png";
import StyledHero from "./Hero.style";

export default function Hero() {
  return (
    <StyledHero>
      <Image src={HeroImage} alt="Profile" />
      <Image src={NameAndTitle} alt="Profile" />
    </StyledHero>
  )
}
