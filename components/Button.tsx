import styled from "styled-components";

const StyledButton = styled.button`
  width: max-content;
  min-width: 10rem;
  color: var(--text-color);
  background: transparent;
  border: 1px solid var(--text-color);
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export default function Button({ text }: { text: string }) {
  return <StyledButton>{text}</StyledButton>;
}
