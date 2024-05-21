import Image from "next/image";
import AboutImage from "@/public/images/aboutImage.jpg";

export default function HomeAbout() {
  return (
    <section>
      <div>
        <h1>About Me</h1>
        <h2>About Me</h2>
        <p>
          As a creative professional with diverse skill set, I bring a unique
          blend of expertise in graphic design & UI/UX design. I create visually
          stunning designs that effectively communicate messages. With a strong
          work ethic, attention to detail, and a collaborative mindset, I thrive
          in team environments and I’m eager to contribute my creativity and
          expertise. Learn More
        </p>
      </div>
      <div>
        <Image src={AboutImage} alt="About" />
      </div>
    </section>
  );
}
