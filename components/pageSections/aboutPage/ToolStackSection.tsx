import Image from "next/image";
import Photoshop from "@/public/icons/photoshop.png";
import Figma from "@/public/icons/figma.png";
import Html5 from "@/public/icons/html-5.png";
import Css3 from "@/public/icons/css-3.png";
import Adobexd from "@/public/icons/xd.png";
import Trello from "@/public/icons/trello.png";
import Slack from "@/public/icons/slack.png";
import Javascript from "@/public/icons/js.png";
import styled from "styled-components";

const StyledToolSection = styled.section`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: clamp(20rem, 80%, 25rem);
    margin: 2rem 0;
    /* align-self: center; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    
    & > div {
      width: clamp(4rem, 10%, 10rem);
      height: max-content;
      padding: 1rem;
      background: white;
      border-radius: 20px;

      & > img {
        width: 100%;
        height: auto;
      }
    }
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
          <Image src={Css3} alt="Tool icon" />
        </div>
        <div>
          <Image src={Adobexd} alt="Tool icon" />
        </div>
        <div>
          <Image src={Trello} alt="Tool icon" />
        </div>
        <div>
          <Image src={Slack} alt="Tool icon" />
        </div>
        <div>
          <Image src={Javascript} alt="Tool icon" />
        </div>
      </div>
    </StyledToolSection>
  );
}
