"use client";

import Image from "next/image";
import Logo from "@/public/images/LOGO.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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

export default function Header() {
  return (
    <StyledHeader>
      <Image src={Logo} alt="Logo" />
      <StyledNav>
        <ul className="desktop-nav">
          <li><Link href="/">Home</Link></li>
          <li><Link href="about">About</Link></li>
          <li><Link href="resume">Resume</Link></li>
          <li><Link href="contact">Contact</Link></li>
        </ul>
        <FontAwesomeIcon icon={faBars} />
      </StyledNav>
    </StyledHeader>
  )
}
