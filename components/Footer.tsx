"use client";

import Image from "next/image";
import LinkedIn from "@/public/icons/linkedIn.png";
import Behance from "@/public/icons/behance.png";
import Mail from "@/public/icons/mail.png";
import WhatsApp from "@/public/icons/whatsApp.png";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #333333;
  padding: 1rem;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <Image src={LinkedIn} alt="linkedIn" />
        <Image src={Behance} alt="behance" />
        <Image src={Mail} alt="mail" />
        <Image src={WhatsApp} alt="whatsApp" />
      </ul>
    </StyledFooter>
  )
}
