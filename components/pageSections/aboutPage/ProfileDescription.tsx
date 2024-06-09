import Image from "next/image";
import HeroImage from "@/public/images/hero-background.png";
import styled from "styled-components";

const StyledDescSection = styled.section`
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  background: url(/images/gradient2.png) no-repeat, url(/images/blob.png) no-repeat bottom right, #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  & > img {
    width: 15rem;
    height: auto;
  }

  & > div {
    padding: 2rem clamp(1rem, 10vw, 10rem);
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default function ProfileDescription() {
  return (
    <StyledDescSection>
      <Image src={HeroImage} alt="Profile" />
      <div>
        <p>
          I found the field of design to be a canvas on which creativity dances
          with pixels and innovation is born from the fusion of art and
          functionality. Hi, my name is Miriam Agyeiwaah Asante, also known as
          Mimi and I believe that design is not merely a job; it&apos;s a relentless
          pursuit of turning dreams into digital reality.
        </p>
        <p>
          My design ethos is based on the idea that each and every pixel counts.
          Every choice, from the placement of a button that directs a user&apos;s
          journey to the color selection that conjures a particular emotion, is
          deliberate. Design is not just what it looks like; it&apos;s about how it
          works.
        </p>
        <p>
          Collaboration is at the heart of my process. I thrive on exchanging
          ideas, challenging conventions, and working alongside brilliant minds.
          The magic happens when diverse perspectives converge, giving birth to
          designs that transcend expectations.
        </p>
        <p>
          My goal is to provide users with an experience they didn&apos;t realize
          they were craving. Come along with me as I transform everyday events
          into remarkable designs. Not only should we design, but also mold
          experiences, arouse feelings, and above all design dreams.
        </p>
      </div>
    </StyledDescSection>
  );
}
