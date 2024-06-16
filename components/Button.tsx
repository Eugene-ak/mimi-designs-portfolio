"use client";

import styled from "styled-components";

const StyledButton = styled.a`
  width: max-content;
  min-width: 10rem;
  color: var(--text-color);
  background: transparent;
  border: 1px solid var(--text-color);
  padding: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
        to right,
        #39065c 0%,
        #c6445d 24%,
        #f9a768 51%,
        #39065c 100%
      ),
      0% 200%, 0% 100%;
  }
`;

export default function Button({ text, href }: { text: string; href: string }) {
  return <StyledButton href={href}>{text}</StyledButton>;
}
