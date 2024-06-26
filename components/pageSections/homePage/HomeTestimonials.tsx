import React from "react";
import TestimonialCard from "../../TestimonialCard";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const StyledTestimonialSection = styled.section`
  background: url(./images/testimonials-bg.png);
  padding: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 700px) {
    padding: 4rem 1rem;
  }

  & > h1 {
    /* font-size: 2rem; */
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    text-align: center;
  }

  & > p {
    display: none;
    font-size: 0.85rem;
    width: 60%;
    text-align: center;
    font-weight: 100;

    @media screen and (max-width: 900px) {
      width: 90%;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-start;
  gap: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
  overflow-x: hidden;

  & .splide__track {
    margin-bottom: 1rem;
  }
`;

const splideOptions = {
  width: "100%",
  height: "15rem",
  perPage: 1,
  perMove: 1,
  type: "loop",
  fixedWidth: "40rem",
  focus: "center",
  pagination: true,
  // padding: "3rem",
  gap: "3rem",
  mediaQuery: "max",
  breakpoints: {
    959: {
      fixedWidth: "100%",
      arrows: false,
    }
  }
}

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
        <Splide aria-label="Testimonies" options={splideOptions}>
          <SplideSlide>
            <TestimonialCard />
          </SplideSlide>
          <SplideSlide>
            <TestimonialCard />
          </SplideSlide>
          <SplideSlide>
            <TestimonialCard />
          </SplideSlide>
        </Splide>
      </Cards>
    </StyledTestimonialSection>
  );
}
