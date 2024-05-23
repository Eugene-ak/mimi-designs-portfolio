import Image from "next/image";
import AboutImage from "@/public/images/aboutImage.jpg";
import Gradient from "@/public/images/about-gradient.png";
import StyledAboutSection from "./HomeAbout.style";
import Button from "@/app/components/Button/Button";

export default function HomeAbout() {
  return (
    <StyledAboutSection>
      <div>
        <div>
          <h1>About Me</h1>
          <h2>
            About <span className="colored-text">Me</span>
          </h2>
        </div>
        <p>
          As a creative professional with diverse skill set, I bring a unique
          blend of expertise in graphic design & UI/UX design. I create visually
          stunning designs that effectively communicate messages. With a strong
          work ethic, attention to detail, and a collaborative mindset, I thrive
          in team environments and I’m eager to contribute my creativity and
          expertise. Learn More
        </p>
        <Button text="Learn More" />
      </div>
      <div>
        <Image src={AboutImage} alt="About" />
      </div>
    </StyledAboutSection>
  );
}
