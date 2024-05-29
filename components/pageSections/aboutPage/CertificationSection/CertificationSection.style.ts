import styled from "styled-components";

const StyledCertSection = styled.section`
  width: 100%;
  padding: 5rem 10rem;
  background: url(/images/testimonials-bg.png);

  & > div {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export default StyledCertSection;