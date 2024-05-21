import Image from "next/image";
import Logo from "@/public/images/LOGO.png";

export default function Header() {
  return (
    <header>
      <Image src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
