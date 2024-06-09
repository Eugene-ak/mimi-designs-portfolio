import Image from "next/image";
import Avatar from "@/public/images/testimonialAvatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledTestimonialCard = styled.div`
  background: #212121;
  width: 40rem;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: .5rem;

    & > img {
      border-radius: 50%;
    }

    & > svg > path {
      fill: var(--styled-text);
    }

    & > p {
      font-size: .8rem;
    }
  }
`;

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
