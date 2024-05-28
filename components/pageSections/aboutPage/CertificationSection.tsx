import EducationCard from "../../EducationCard";
import UG from "@/public/icons/ug.png";

export default function CertificationSection() {
  return (
    <section>
      <h1>Education & Certification</h1>
      <h2>Education & Certification</h2>
      <EducationCard
        image={UG}
        title="Bachelor of science | Information Technology"
        institution="University of Ghana - Degree"
      >
        <button>Show creds</button>
        <p>
          Relevant Courses: Human-Computer Interaction, Web Development, Mobile
          App Development, Research Methods, Agile Methodology, Computer
          Programming
        </p>
      </EducationCard>
      <EducationCard
        image={UG}
        title="Bachelor of science | Information Technology"
        institution="University of Ghana - Degree"
      >
        <button>Show creds</button>
        <p>
          Relevant Courses: Human-Computer Interaction, Web Development, Mobile
          App Development, Research Methods, Agile Methodology, Computer
          Programming
        </p>
      </EducationCard>
      <EducationCard
        image={UG}
        title="Bachelor of science | Information Technology"
        institution="University of Ghana - Degree"
      >
        <button>Show creds</button>
        <p>
          Relevant Courses: Human-Computer Interaction, Web Development, Mobile
          App Development, Research Methods, Agile Methodology, Computer
          Programming
        </p>
      </EducationCard>
      <EducationCard
        image={UG}
        title="Bachelor of science | Information Technology"
        institution="University of Ghana - Degree"
      >
        <button>Show creds</button>
        <p>
          Relevant Courses: Human-Computer Interaction, Web Development, Mobile
          App Development, Research Methods, Agile Methodology, Computer
          Programming
        </p>
      </EducationCard>
    </section>
  );
}
