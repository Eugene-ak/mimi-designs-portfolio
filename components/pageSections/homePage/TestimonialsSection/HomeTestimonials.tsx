import TestimonialCard from "../../../TestimonialCard/TestimonialCard";
import StyledTestimonialSection, { Cards } from "./Testimonials.style";

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
