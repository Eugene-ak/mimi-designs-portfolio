"use client";

import Image from "next/image";
import Logo from "@/public/images/LOGO.png";
import Link from "next/link";
import StyledHeader, { StyledNav } from "./Header.style";

export default function Header() {
  return (
    <StyledHeader>
      <Image src={Logo} alt="Logo" />
      <StyledNav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="about">About</Link></li>
          <li><Link href="resume">Resume</Link></li>
          <li><Link href="contact">Contact</Link></li>
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}
