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
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export default StyledProjectSection;
