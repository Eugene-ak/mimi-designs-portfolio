"use client";

import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background: #292C36;
`;

export const StyledNav = styled.nav`
  width: 50%;

  & > ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & > li {
      padding: 0;
      
      & > a {
        color: var(--text-color);
        text-decoration: none;
      }
    }
  }

  & > svg {
    display: none;
  }

  @media screen and (max-width: 600px) {
    justify-self: flex-end;

    & > ul {
      display: none;
    }

    & > svg {
      height: 2rem;
      display: flex;
    }
  }
`;

export default StyledHeader;
