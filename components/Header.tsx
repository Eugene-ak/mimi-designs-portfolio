"use client";

import Image from "next/image";
import Logo from "@/public/images/LOGO.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LinkedIn from "@/public/icons/linkedIn.svg";
import Behance from "@/public/icons/behance.svg";
import Mail from "@/public/icons/mail.svg";
import WhatsApp from "@/public/icons/whatsApp.svg";
import styled from "styled-components";
import { useRef } from "react";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background: #212121;

  & > img {
    width: clamp(4rem, 10%, 7rem);
    height: auto;
  }
`;

const StyledNav = styled.nav`
  /* width: 50%; */
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    display: none;
  }

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
`;

const MobileNav = styled.nav`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
  }

  & > svg {
    width: 1.2rem;
    height: auto;
  }

  & > div {
    position: absolute;
    left: 0;
    top: 4rem;
    background: #151617;
    width: 100%;
    height: 100vh;
    padding: 2rem 5rem;
    display: none;
    flex-direction: column;
    align-items: flex-start;

    & > ul:first-of-type {
      margin: 1rem 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > li {
        list-style: none;

        & > a {
          text-decoration: none;
          color: var(--text-color);

          &:hover,
          &:focus-visible {
            color: var(--styled-text);
            cursor: pointer;
            outline: none;
          }
        }
      }
    }

    & > ul:last-of-type {
      padding: 0;
      margin-top: 2rem;
      display: flex;
      gap: 1rem;

      & > li {
        padding: 0;
        list-style: none;
      }
    }
  }
`;

export default function Header() {
  const mobileMenu = useRef<HTMLDivElement | null>(null);

  function showMenu() {
    if (mobileMenu.current) {
      if (mobileMenu.current.style.display !== "flex") {
        mobileMenu.current.style.display = "flex";
      } else {
        mobileMenu.current.style.display = "none";
      }
    }
  }

  return (
    <StyledHeader>
      <Image src={Logo} alt="Logo" />
      <StyledNav>
        <ul className="desktop-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="resume">Resume</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </StyledNav>
      <MobileNav>
        <FontAwesomeIcon icon={faBars} onClick={showMenu} />
        <div ref={mobileMenu}>
          <h1 className="colored-text">Menu</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="resume">Resume</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <Image src={LinkedIn} alt="linkedIn" />
            </li>
            <li>
              <Image src={Behance} alt="behance" />
            </li>
            <li>
              <Image src={Mail} alt="mail" />
            </li>
            <li>
              <Image src={WhatsApp} alt="whatsApp" />
            </li>
          </ul>
        </div>
      </MobileNav>
    </StyledHeader>
  );
}
