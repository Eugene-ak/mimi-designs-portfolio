import StyledContactSection from "./ContactSection.style";

export default function ContactSection() {
  return (
    <StyledContactSection>
      <h1>Interested in<br /> working with <span className="colored-text">me</span>?</h1>
      <form action="">
        <input id="email" type="text" placeholder="Your email" />
        <input id="name" type="text" placeholder="Your name" />
        <input id="message" type="text" placeholder="Your message" />
        <input id="submit" type="submit" value="Send" />
      </form>
    </StyledContactSection>
  );
}
