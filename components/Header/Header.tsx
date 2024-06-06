"use client";

import Image from "next/image";
import Logo from "@/public/images/LOGO.png";
import Link from "next/link";
import StyledHeader, { StyledNav } from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
