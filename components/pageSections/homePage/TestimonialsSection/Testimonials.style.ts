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

export const Cards = styled.div`
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

export default StyledTestimonialSection;
