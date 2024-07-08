"use client";

import Image from "next/image";
import LinkedIn from "@/public/icons/linkedIn.svg";
import Behance from "@/public/icons/behance.svg";
import Mail from "@/public/icons/mail.svg";
import WhatsApp from "@/public/icons/whatsApp.svg";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #212121;
  padding: 1rem;

  & > ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & img {
      width: 2.5rem;

      @media screen and (max-width: 800px) {
        width: 1.67rem;
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <a href="https://www.linkedin.com/in/miriam-asante-909851243/">
          <Image src={LinkedIn} alt="linkedIn" />
        </a>
        <a href="https://www.behance.net/MzMimi_designs">
          <Image src={Behance} alt="behance" />
        </a>
        <a href="">
          <Image src={Mail} alt="mail" />
        </a>
        <a href="">
          <Image src={WhatsApp} alt="whatsApp" />
        </a>
      </ul>
    </StyledFooter>
  );
}
