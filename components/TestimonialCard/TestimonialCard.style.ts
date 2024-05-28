import styled from "styled-components";

const StyledTestimonialCard = styled.div`
  background: #212121;
  width: 40rem;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: .5rem;

    & > img {
      border-radius: 50%;
    }

    & > svg > path {
      fill: var(--styled-text);
    }

    & > p {
      font-size: .8rem;
    }
  }
`;

export default StyledTestimonialCard;