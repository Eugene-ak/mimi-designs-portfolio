import styled from "styled-components";

const StyledSkillSection = styled.section`
  padding: clamp(1rem, 5vw, 5rem);
  background: #e8e8e8;
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
    padding: 0 clamp(1rem, 10vw, 8rem);
    text-align: center;
    font-weight: 600;
  }

  & > div {
    padding: 0 clamp(1rem, 10vw, 8rem);
    margin: 1.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const StyledSkill = styled.div`
  padding: 0.3rem;
  border: 1px solid;
  border-image: linear-gradient(to right, purple, orange, purple) 1;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
`;

export default function SkillsSection() {
  return (
    <StyledSkillSection>
      <h1 className="colored-text">Hard Skills</h1>
      <p>
        Maximizing the capabilities of UI/UX design through a dedicated emphasis
        on honing fundamental technical expertise.
      </p>
      <div>
        <StyledSkill>Graphic Design</StyledSkill>
        <StyledSkill>Wireframing</StyledSkill>
        <StyledSkill>Typography</StyledSkill>
        <StyledSkill>Design Thinking</StyledSkill>
        <StyledSkill>UI Design Tools</StyledSkill>
        <StyledSkill>UX Design Principles</StyledSkill>
        <StyledSkill>Design Systems</StyledSkill>
        <StyledSkill>UI Component</StyledSkill>
        <StyledSkill>User Research</StyledSkill>
        <StyledSkill>Prototyping</StyledSkill>
        <StyledSkill>Responsive Design</StyledSkill>
        <StyledSkill>Usability Testing</StyledSkill>
        <StyledSkill>HTML</StyledSkill>
        <StyledSkill>CSS</StyledSkill>
        <StyledSkill>Javascript</StyledSkill>
        <StyledSkill>Accessibilty</StyledSkill>
        <StyledSkill>User Persona</StyledSkill>
      </div>
      <h1 className="colored-text">Soft Skills</h1>
      <div>
        <StyledSkill>Commuication</StyledSkill>
        <StyledSkill>Creativity</StyledSkill>
        <StyledSkill>Collaboration</StyledSkill>
        <StyledSkill>Empathy</StyledSkill>
        <StyledSkill>Attention to Detail</StyledSkill>
        <StyledSkill>Time Management</StyledSkill>
        <StyledSkill>Adaptabilty</StyledSkill>
      </div>
    </StyledSkillSection>
  );
}
