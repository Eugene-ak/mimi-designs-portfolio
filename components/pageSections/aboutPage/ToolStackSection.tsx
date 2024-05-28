import Image from "next/image";
import Photoshop from "@/public/icons/photoshop.jpg";
import Figma from "@/public/icons/figma.jpg";
import Html5 from "@/public/icons/html5.jpg"
import Css3 from "@/public/icons/css3.jpg";
import Adobexd from "@/public/icons/adobexd.jpg";
import Javascript from "@/public/icons/javascript.jpg";

export default function ToolStackSection() {
  return (
    <section>
      <h1>My Tool Stack</h1>
      <h2>Tools I use</h2>
      <Image src={Photoshop} alt="Tool icon" />
      <Image src={Figma} alt="Tool icon" />
      <Image src={Html5} alt="Tool icon" />
      <Image src={Html5} alt="Tool icon" />
      <Image src={Css3} alt="Tool icon" />
      <Image src={Adobexd} alt="Tool icon" />
      <Image src={Javascript} alt="Tool icon" />
      <Image src={Javascript} alt="Tool icon" />
    </section>
  )
}
