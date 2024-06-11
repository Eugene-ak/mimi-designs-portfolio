import EducationCard from "../../EducationCard";
import UG from "@/public/icons/ug.png";
import Udemy from "@/public/icons/udemy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledCertSection = styled.section`
  width: 100%;
  padding: 5rem clamp(2rem, 10vw, 8rem);
  background: url(/images/testimonials-bg.png);

  & > div {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export default function CertificationSection() {
  return (
    <StyledCertSection>
      <h1 className="large-heading">Education & Certification</h1>
      <h2>
        <span className="colored-text">Education</span> &{" "}
        <span className="colored-text">Certification</span>
      </h2>
      <div>
        <EducationCard
          image={UG}
          title="Bachelor of science | Information Technology"
          institution="University of Ghana - Degree"
        >
          <p>
            <span>Relevant Courses:</span> Human-Computer Interaction, Web Development,
            Mobile App Development, Research Methods, Agile Methodology,
            Computer Programming
          </p>
        </EducationCard>
        <EducationCard
          image={Udemy}
          title="Bachelor of science | Information Technology"
          institution="University of Ghana - Degree"
        >
          <button>Show credentals<span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></button>
        </EducationCard>
        <EducationCard
          image={Udemy}
          title="Bachelor of science | Information Technology"
          institution="University of Ghana - Degree"
        >
          <button>Show credentals<span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></button>
        </EducationCard>
        <EducationCard
          image={Udemy}
          title="Bachelor of science | Information Technology"
          institution="University of Ghana - Degree"
        >
          <button>Show credentals<span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></button>
        </EducationCard>
      </div>
    </StyledCertSection>
  );
}
