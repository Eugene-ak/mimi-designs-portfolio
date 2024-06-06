import styled from "styled-components";

const StyledProjectCard = styled.div`
  width: 90%;
  /* max-width: 25rem; */
  background: #212121;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  & > div:first-of-type > img {
    width: 100%;
    height: auto;
  }

  & > div:last-of-type {
    padding: 1rem;

    & > h3, p {
      padding: 0.5rem 0;
    }
  }
`;

export default StyledProjectCard;