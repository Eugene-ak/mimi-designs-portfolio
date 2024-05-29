import StyledSkillSection, { StyledSkill } from "./SkillSection.style";

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
