import Image from "next/image";
import HeroImage from "@/public/images/heroImage.png";
import NameAndTitle from "@/public/images/nameAndTitle.png";

export default function Hero() {
  return (
    <section>
      <Image src={HeroImage} alt="Profile" />
      <Image src={NameAndTitle} alt="Profile" />
    </section>
  )
}
