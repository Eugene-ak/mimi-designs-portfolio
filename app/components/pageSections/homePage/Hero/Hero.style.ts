import styled from "styled-components";

const StyledHero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  padding: 0rem 2rem;

  & > img {
    width: 45%;
    height: auto;

    &:first-of-type {
      width: 50%;
      border-radius: 50%;
      margin-top: 3rem;
    }
  }
`;

export default StyledHero;