"use client";

import Image from "next/image";
import StyledFooter from "./Footer.style";
import LinkedIn from "@/public/icons/linkedIn.png";
import Behance from "@/public/icons/behance.png";
import Mail from "@/public/icons/mail.png";
import WhatsApp from "@/public/icons/whatsApp.png";

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
