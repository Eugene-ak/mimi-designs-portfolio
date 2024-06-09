import Image from "next/image";
import Photoshop from "@/public/icons/photoshop.jpg";
import Figma from "@/public/icons/figma.jpg";
import Html5 from "@/public/icons/html5.jpg";
import Css3 from "@/public/icons/css3.jpg";
import Adobexd from "@/public/icons/adobexd.jpg";
import Javascript from "@/public/icons/javascript.jpg";
import styled from "styled-components";

const StyledToolSection = styled.section`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;

export default function ToolStackSection() {
  return (
    <StyledToolSection>
      <h1 className="large-heading">My Tool Stack</h1>
      <h2>
        <span className="colored-text">Tools</span> I use
      </h2>
      <div>
        <div>
          <Image src={Photoshop} alt="Tool icon" />
        </div>
        <div>
          <Image src={Figma} alt="Tool icon" />
        </div>
        <div>
          <Image src={Html5} alt="Tool icon" />
        </div>
        <div>
          <Image src={Html5} alt="Tool icon" />
        </div>
        <div>
          <Image src={Css3} alt="Tool icon" />
        </div>
        <div>
          <Image src={Adobexd} alt="Tool icon" />
        </div>
        <div>
          <Image src={Javascript} alt="Tool icon" />
        </div>
        <div>
          <Image src={Javascript} alt="Tool icon" />
        </div>
      </div>
    </StyledToolSection>
  );
}
