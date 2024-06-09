import Image from "next/image";
import AboutImage from "@/public/images/aboutImage.jpg";
import Button from "@/components/Button";
import styled from "styled-components";

const StyledAboutSection = styled.section`
  width: 90%;
  background: url(/images/about-gradient.png) no-repeat,
    url(/images/blob.png) no-repeat bottom right, #212121;
  margin: auto;
  padding: 5rem;
  display: flex;
  gap: 3rem;
  border-radius: 20px;

  & > div {
    width: 50%;

    &:first-of-type {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media screen and (max-width: 1130px) {
        width: 100%;
        text-align: center;
        align-items: center;
      }
    }

    &:first-of-type > div > h2 {
      letter-spacing: 0.1rem;
    }

    &:first-of-type > p {
      font-size: clamp(0.8rem, 1.5vw, 2rem);
      line-height: 1.8;
      color: #b0adad;
    }

    &:first-of-type > button {
      width: 30%;
      min-width: 10rem;
      color: var(--text-color);
      background: transparent;
      border: 1px solid var(--text-color);
      padding: 1rem;
    }

    &:last-of-type {
      height: max-content;
      border-top-right-radius: 8rem;
      border-bottom-left-radius: 8rem;
      overflow: hidden;

      @media screen and (max-width: 1130px) {
        display: none;
      }

      & > img {
        width: 100%;
        height: 100%;
        /* height: auto; */
      }
    }
  }

  @media screen and (max-width: 550px) {
    padding: 3rem;
  }

  @media screen and (max-width: 420px) {
    padding: 1rem;
  }
`;

export default function HomeAbout() {
  return (
    <StyledAboutSection>
      <div>
        <div>
          <h1 className="large-heading">About Me</h1>
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
