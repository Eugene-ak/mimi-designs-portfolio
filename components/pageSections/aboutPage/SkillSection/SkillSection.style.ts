import styled from "styled-components";

const StyledSkillSection = styled.section`
  padding: 5rem;
  background: #E8E8E8;
  color: var(--app-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  & > p {
    width: 70%;
    text-align: center;
    font-weight: 600;
  }

  & > div {
    width: 70%;
    margin: 1.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const StyledSkill = styled.div`
  padding: .3rem;
  border: 1px solid;
  border-image: linear-gradient(to right, purple, orange, purple) 1;
  border-radius: 20px;
  font-weight: 600;
  font-size: .9rem;
`;

export default StyledSkillSection;