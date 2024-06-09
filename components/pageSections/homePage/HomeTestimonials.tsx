import TestimonialCard from "../../TestimonialCard";
import styled from "styled-components";

const StyledTestimonialSection = styled.section`
  background: url(./images/testimonials-bg.png);
  padding: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  & > p {
    font-size: 0.85rem;
    width: 60%;
    text-align: center;
    font-weight: 100;
  }

  & > div > .ribbons {
    width: 20px;
    height: 20px;
    background: white;
  }
`;

const Cards = styled.div`
  /* width: max-content; */
  display: flex;
  /* display: inline-flex; */
  align-self: flex-start;
  gap: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
  overflow-x: hidden;
  /* animation: slide 10s linear infinite; */

  @keyframes slide {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export default function HomeTestimonials() {
  return (
    <StyledTestimonialSection>
      <h1>
        Testimonials That<br></br> Speak To{" "}
        <span className="colored-text">My Results</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi
        sit non eveniet animi culpa est, labore enim tempora, consectetur rerum
        voluptate nam eius, facilis quis laudantium? Vero, aut saepe.
      </p>
      <Cards>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Cards>
      <Cards>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Cards>
      <div>
        <span className="ribbons"></span>
        <span className="ribbons"></span>
        <span className="ribbons"></span>
      </div>
    </StyledTestimonialSection>
  );
}