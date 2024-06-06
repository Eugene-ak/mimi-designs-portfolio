import styled from "styled-components";

const StyledProjectSection = styled.section`
  width: 100%;
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    font-size: 3rem;
    color: #a1a1a1;
    letter-spacing: 0.2rem;
  }

  & > div {
    width: 85%;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 2rem;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledProjectSection;
