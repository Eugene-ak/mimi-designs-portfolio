import Image from "next/image";
import StyledTestimonialCard from "./TestimonialCard.style";
import Avatar from "@/public/images/testimonialAvatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialCard() {
  return (
    <StyledTestimonialCard>
      <div>
        <Image src={Avatar} alt="avatar" />
        <h3>Akosua Osei</h3>
        <p>Founder BetechConnected</p>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>5.0</span>
      </div>
      <div>
        <p>
          Collaborating with Miriam was a delight. Her unmatched creativity and
          precision in design consistently surpassed our expectations.
          Trustworthy, innovative, and always punctual, Miriam is a top-tier
          designer. Excited for future collaborations! Highly recommended for
          design excellence and client satisfaction.
        </p>
      </div>
    </StyledTestimonialCard>
  );
}
