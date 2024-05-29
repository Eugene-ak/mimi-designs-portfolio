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
    justify-content: space-evenly;

    & > li {
      padding: 0;
      
      & > a {
        color: var(--text-color);
        text-decoration: none;
      }
    }
  }
`;

export default StyledHeader;
