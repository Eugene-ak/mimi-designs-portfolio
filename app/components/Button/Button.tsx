import StyledButton from "./Button.style";

export default function Button({ text }: { text: string }) {
  return <StyledButton>{text}</StyledButton>;
}