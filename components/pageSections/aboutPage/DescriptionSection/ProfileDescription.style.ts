import styled from "styled-components";

const StyledDescSection = styled.section`
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  background: url(/images/gradient2.png) no-repeat, url(/images/blob.png) no-repeat bottom right, #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  & > img {
    width: 15rem;
    height: auto;
    /* border-radius: 50%; */
  }

  & > div {
    padding: 2rem 10rem;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default StyledDescSection;