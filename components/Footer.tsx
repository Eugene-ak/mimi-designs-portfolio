"use client";

import Image from "next/image";
import LinkedIn from "@/public/icons/linkedIn.svg";
import Behance from "@/public/icons/behance.svg";
import Mail from "@/public/icons/mail.svg";
import WhatsApp from "@/public/icons/whatsApp.svg";
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
