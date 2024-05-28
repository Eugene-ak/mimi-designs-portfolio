import styled from "styled-components";

const StyledContactSection = styled.section`
  width: 40%;
  margin: auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }

  & > form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 1rem;

    & > #email {
      text-align: center;
      color: var(--text-color);
      grid-area: 1 / 1 / 2 / 2;
      background: transparent;
      padding: 1rem;
      border: 1px solid white;
    }

    & > #name {
      text-align: center;
      color: var(--text-color);
      grid-area: 1 / 2 / 2 / 3;
      background: transparent;
      padding: 1rem;
      border: 1px solid white;
    }

    & > #message {
      text-align: center;
      color: var(--text-color);
      grid-area: 2 / 1 / 3 / 3;
      background: transparent;
      padding: 1rem;
      border: 1px solid white;
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

export default StyledContactSection;
