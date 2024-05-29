import styled from "styled-components";

const StyledToolSection = styled.section`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;

export default StyledToolSection;