import EducationCard from "../../../EducationCard/EducationCard";
import UG from "@/public/icons/ug.png";
import Udemy from "@/public/icons/udemy.png";
import StyledCertSection from "./CertificationSection.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

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
