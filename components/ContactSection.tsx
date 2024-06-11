import styled from "styled-components";

const StyledContactSection = styled.section`
  width: 100%;
  margin: auto;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 8rem 0;
  }

  & > h1 {
    text-align: center;
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 300;
  }

  & > form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 1.5rem;

    @media screen and (max-width: 480px) {
      & > * {
        width: 100%;
        justify-self: center;
      }
    }

    & > #email {
      text-align: center;
      color: var(--text-color);
      grid-area: 1 / 1 / 2 / 2;
      background: transparent;
      padding: 1rem;
      border: 1px solid white;

      &:focus-visible {
        outline: none;
        border-color: var(--styled-text);
      }
    }

    & > #name {
      text-align: center;
      color: var(--text-color);
      grid-area: 1 / 2 / 2 / 3;
      background: transparent;
      padding: 1rem;
      border: 1px solid white;

      &:focus-visible {
        outline: none;
        border-color: var(--styled-text);
      }
    }

    & > #message {
      text-align: center;
      color: var(--text-color);
      grid-area: 2 / 1 / 3 / 3;
      background: transparent;
      padding: 1rem;
      border: 1px solid white;

      &:focus-visible {
        outline: none;
        border-color: var(--styled-text);
      }
    }

    & > #submit {
      color: var(--text-color);
      grid-area: 3 / 1 / 4 / 3;
      width: 5rem;
      padding: 1rem;
      background: transparent;
      border: 1px solid white;
      justify-self: center;
    }
  }
`;

export default function ContactSection() {
  return (
    <StyledContactSection>
      <h1>
        Interested in
        <br /> working with <span className="colored-text">me</span>?
      </h1>
      <form action="">
        <input id="email" type="text" placeholder="Your email" />
        <input id="name" type="text" placeholder="Your name" />
        <input id="message" type="text" placeholder="Your message" />
        <input id="submit" type="submit" value="Send" />
      </form>
    </StyledContactSection>
  );
}
