import styled from "styled-components";

const StyledAboutSection = styled.section`
  width: 90%;
  background: #212121;
  margin: auto;
  padding: 5rem;
  display: flex;
  gap: 3rem;
  border-radius: 20px;

  & > div {
    width: 50%;
    
    &:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &:first-of-type > div > h1 {
      font-size: 3rem;
      color: #A1A1A1;
      letter-spacing: 0.2rem;
    }
    
    &:first-of-type > div > h2 {
      letter-spacing: 0.1rem;
    }

    &:first-of-type > p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #B0ADAD;
    }

    &:first-of-type > button {
      width: 30%;
      min-width: 10rem;
      color: var(--text-color);
      background: transparent;
      border: 1px solid var(--text-color);
      padding: 1rem;
    }

    &:last-of-type {
      border-top-right-radius: 8rem;
      border-bottom-left-radius: 8rem;
      overflow: hidden;
    }

    &:last-of-type > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledAboutSection;